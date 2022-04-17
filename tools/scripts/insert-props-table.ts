import * as docgen from "react-docgen-typescript";
import { resolve } from "path";
import { readFileSync, writeFileSync } from "fs";

const mark = {
  start: "<!-- start generate props table -->",
  end: "<!-- end generate props table -->",
};

const attention =
  "<!-- このセクションは自動で作成されます。自分で編集しないでください。 -->";

const sectionTitle = "## Props";

const escape = (str: string) =>
  str.split("|").join("\\|").split("\n").join("<br>");

/**
 * propsを解析したいcomponetの情報を返す
 */
const getComponentInfo = (componentPath: string) => {
  const path = resolve(componentPath);

  return {
    path,
  };
};

/**
 * propsデータを挿入したいdocsの情報を返す
 */
const getDocsInfo = (docsPath: string) => {
  const path = resolve(docsPath);
  const content = readFileSync(path, { encoding: "utf-8" });

  return {
    path,
    content,
  };
};

/**
 * propsデータ情報テーブルを返す
 */
const getTable = (propsInfo: docgen.ComponentDoc[]) => {
  const tableHeader = `|Name|Type|Defined by|Required|Default|Description|
|:-----|:-----|:-----|:------|:------|:----------|`;

  const tableBody = Object.values(propsInfo[0].props)
    .sort((a, b) => (a.required === b.required ? 0 : a.required ? -1 : 1))
    .map(
      (props) =>
        `|${props.name}|${escape(props.type.name)}|${props.declarations
          .map((d) => d.fileName)
          .join("<br>")}|${props.required && "✅"}|${
          props.defaultValue
        }|${escape(props.description)}|`
    )
    .join("\n");

  const table = `${tableHeader}\n${tableBody}`;

  return { table };
};

const getSection = (table: string) => {
  const section = `${mark.start}
${attention}
${sectionTitle}
<!-- prettier-ignore-start -->
${table}
<!-- prettier-ignore-end -->
${mark.end}`;

  return { section };
};

const checkMark = (docsContent: string) => {
  const hasStartMark = docsContent.includes(mark.start);
  if (!hasStartMark)
    throw new Error(
      `開始セクションがありません。\n${mark.start}\nを記入してください。`
    );
  const hasEndMark = docsContent.includes(mark.end);
  if (!hasEndMark)
    throw new Error(
      `終了セクションがありません。\n${mark.end}\nを記入してください。`
    );
};

/**
 * props tableを挿入する
 */
const insertPropsInfo = (params: {
  componentPath: string;
  docsPath: string;
  docsContent: string;
}) => {
  checkMark(params.docsContent);

  const propsInfo = docgen.parse(params.componentPath, {});

  const { table } = getTable(propsInfo);
  const { section } = getSection(table);

  const index = {
    start: params.docsContent.indexOf(mark.start),
    end: params.docsContent.indexOf(mark.end) + mark.end.length,
  };

  const before = params.docsContent.substring(0, index.start);
  const after = params.docsContent.substring(index.end);

  writeFileSync(params.docsPath, `${before}${section}${after}`);
};

const main = () => {
  const [, , componentPath, docsPath] = process.argv;
  if (!componentPath) throw new Error("component pathが引数に存在しません。");
  if (!docsPath) throw new Error("docs pathが引数に存在しません。");

  const componentInfo = getComponentInfo(componentPath);
  const docsInfo = getDocsInfo(docsPath);

  insertPropsInfo({
    componentPath: componentInfo.path,
    docsContent: docsInfo.content,
    docsPath: docsInfo.path,
  });
};

main();
