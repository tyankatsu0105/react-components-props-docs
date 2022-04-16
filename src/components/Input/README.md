# Input

<!-- start generate props table -->
<!-- このセクションは自動で作成されます。自分で編集しないでください。 -->

## Props

<!-- prettier-ignore-start -->

| Name   | Type   | Default | Description |
| :----- | :----- | :------ | :---------- |
|inputMode|"text" | "none" | "search" | "tel" | "url" | "email" | "numeric" | "decimal"|null|Hints at the type of data that might be entered by the user while editing the element or its contents<br>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute|
|is|string|null|Specify that a standard HTML element should behave like a defined custom built-in element<br>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is|
|aria-activedescendant|string|null|Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.|
|aria-atomic|Booleanish|null|Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.|
|aria-autocomplete|"list" | "none" | "inline" | "both"|null|Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br>presented if they are made.|
|aria-busy|Booleanish|null|Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.|
|aria-checked|boolean | "true" | "false" | "mixed"|null|Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br>@see aria-pressed<br>@see aria-selected.|
|aria-colcount|number|null|Defines the total number of columns in a table, grid, or treegrid.<br>@see aria-colindex.|
|aria-colindex|number|null|Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br>@see aria-colcount<br>@see aria-colspan.|
|aria-colspan|number|null|Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br>@see aria-colindex<br>@see aria-rowspan.|
|aria-controls|string|null|Identifies the element (or elements) whose contents or presence are controlled by the current element.<br>@see aria-owns.|
|aria-current|boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date"|null|Indicates the element that represents the current item within a container or set of related elements.|
|aria-describedby|string|null|Identifies the element (or elements) that describes the object.<br>@see aria-labelledby|
|aria-details|string|null|Identifies the element that provides a detailed, extended description for the object.<br>@see aria-describedby.|
|aria-disabled|Booleanish|null|Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br>@see aria-hidden<br>@see aria-readonly.|
|aria-dropeffect|"link" | "none" | "copy" | "execute" | "move" | "popup"|null|Indicates what functions can be performed when a dragged object is released on the drop target.<br>@deprecated in ARIA 1.1|
|aria-errormessage|string|null|Identifies the element that provides an error message for the object.<br>@see aria-invalid<br>@see aria-describedby.|
|aria-expanded|Booleanish|null|Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.|
|aria-flowto|string|null|Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br>allows assistive technology to override the general default of reading in document source order.|
|aria-grabbed|Booleanish|null|Indicates an element's "grabbed" state in a drag-and-drop operation.<br>@deprecated in ARIA 1.1|
|aria-haspopup|boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree"|null|Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.|
|aria-hidden|Booleanish|null|Indicates whether the element is exposed to an accessibility API.<br>@see aria-disabled.|
|aria-invalid|boolean | "true" | "false" | "grammar" | "spelling"|null|Indicates the entered value does not conform to the format expected by the application.<br>@see aria-errormessage.|
|aria-keyshortcuts|string|null|Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.|
|aria-label|string|null|Defines a string value that labels the current element.<br>@see aria-labelledby.|
|aria-labelledby|string|null|Identifies the element (or elements) that labels the current element.<br>@see aria-describedby.|
|aria-level|number|null|Defines the hierarchical level of an element within a structure.|
|aria-live|"off" | "assertive" | "polite"|null|Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.|
|aria-modal|Booleanish|null|Indicates whether an element is modal when displayed.|
|aria-multiline|Booleanish|null|Indicates whether a text box accepts multiple lines of input or only a single line.|
|aria-multiselectable|Booleanish|null|Indicates that the user may select more than one item from the current selectable descendants.|
|aria-orientation|"horizontal" | "vertical"|null|Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.|
|aria-owns|string|null|Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br>@see aria-controls.|
|aria-placeholder|string|null|Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br>A hint could be a sample value or a brief description of the expected format.|
|aria-posinset|number|null|Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br>@see aria-setsize.|
|aria-pressed|boolean | "true" | "false" | "mixed"|null|Indicates the current "pressed" state of toggle buttons.<br>@see aria-checked<br>@see aria-selected.|
|aria-readonly|Booleanish|null|Indicates that the element is not editable, but is otherwise operable.<br>@see aria-disabled.|
|aria-relevant|"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals"|null|Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br>@see aria-atomic.|
|aria-required|Booleanish|null|Indicates that user input is required on the element before a form may be submitted.|
|aria-roledescription|string|null|Defines a human-readable, author-localized description for the role of an element.|
|aria-rowcount|number|null|Defines the total number of rows in a table, grid, or treegrid.<br>@see aria-rowindex.|
|aria-rowindex|number|null|Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br>@see aria-rowcount<br>@see aria-rowspan.|
|aria-rowspan|number|null|Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br>@see aria-rowindex<br>@see aria-colspan.|
|aria-selected|Booleanish|null|Indicates the current "selected" state of various widgets.<br>@see aria-checked<br>@see aria-pressed.|
|aria-setsize|number|null|Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br>@see aria-posinset.|
|aria-sort|"none" | "ascending" | "descending" | "other"|null|Indicates if items in a table or grid are sorted in ascending or descending order.|
|aria-valuemax|number|null|Defines the maximum allowed value for a range widget.|
|aria-valuemin|number|null|Defines the minimum allowed value for a range widget.|
|aria-valuenow|number|null|Defines the current value for a range widget.<br>@see aria-valuetext.|
|aria-valuetext|string|null|Defines the human readable text alternative of aria-valuenow for a range widget.|
|onKeyPress|KeyboardEventHandler<HTMLDivElement>|null|@deprecated|
|onKeyPressCapture|KeyboardEventHandler<HTMLDivElement>|null|@deprecated|
|isError|boolean|null|errorが発生したかどうか|
|errorMessage|string|null|isError = trueの場合に表示するエラーメッセージ|
|inputProps|Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>> & { ...; }|null|input elementへ渡すprops|
<!-- prettier-ignore-end -->

<!-- end generate props table -->
