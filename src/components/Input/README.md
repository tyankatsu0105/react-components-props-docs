# Input

<!-- start generate props table -->
<!-- このセクションは自動で作成されます。自分で編集しないでください。 -->

## Props

<!-- prettier-ignore-start -->

| Name   | Type   | Default | Description |
| :----- | :----- | :------ | :---------- |
|slot|string|null||
|style|CSSProperties|null||
|title|string|null||
|key|Key|null||
|defaultChecked|boolean|null||
|defaultValue|string | number | readonly string[]|null||
|suppressContentEditableWarning|boolean|null||
|suppressHydrationWarning|boolean|null||
|accessKey|string|null||
|className|string|null||
|contentEditable|Booleanish | "inherit"|null||
|contextMenu|string|null||
|dir|string|null||
|draggable|Booleanish|null||
|hidden|boolean|null||
|id|string|null||
|lang|string|null||
|placeholder|string|null||
|spellCheck|Booleanish|null||
|tabIndex|number|null||
|translate|"yes" | "no"|null||
|radioGroup|string|null||
|role|AriaRole|null||
|about|string|null||
|datatype|string|null||
|inlist|any|null||
|prefix|string|null||
|property|string|null||
|resource|string|null||
|typeof|string|null||
|vocab|string|null||
|autoCapitalize|string|null||
|autoCorrect|string|null||
|autoSave|string|null||
|color|string|null||
|itemProp|string|null||
|itemScope|boolean|null||
|itemType|string|null||
|itemID|string|null||
|itemRef|string|null||
|results|number|null||
|security|string|null||
|unselectable|"on" | "off"|null||
|inputMode|"text" | "none" | "search" | "tel" | "url" | "email" | "numeric" | "decimal"|null|Hints at the type of data that might be entered by the user while editing the element or its contents
@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute|
|is|string|null|Specify that a standard HTML element should behave like a defined custom built-in element
@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is|
|aria-activedescendant|string|null|Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.|
|aria-atomic|Booleanish|null|Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.|
|aria-autocomplete|"list" | "none" | "inline" | "both"|null|Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.|
|aria-busy|Booleanish|null|Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.|
|aria-checked|boolean | "true" | "false" | "mixed"|null|Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
@see aria-pressed
@see aria-selected.|
|aria-colcount|number|null|Defines the total number of columns in a table, grid, or treegrid.
@see aria-colindex.|
|aria-colindex|number|null|Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
@see aria-colcount
@see aria-colspan.|
|aria-colspan|number|null|Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
@see aria-colindex
@see aria-rowspan.|
|aria-controls|string|null|Identifies the element (or elements) whose contents or presence are controlled by the current element.
@see aria-owns.|
|aria-current|boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date"|null|Indicates the element that represents the current item within a container or set of related elements.|
|aria-describedby|string|null|Identifies the element (or elements) that describes the object.
@see aria-labelledby|
|aria-details|string|null|Identifies the element that provides a detailed, extended description for the object.
@see aria-describedby.|
|aria-disabled|Booleanish|null|Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
@see aria-hidden
@see aria-readonly.|
|aria-dropeffect|"link" | "none" | "copy" | "execute" | "move" | "popup"|null|Indicates what functions can be performed when a dragged object is released on the drop target.
@deprecated in ARIA 1.1|
|aria-errormessage|string|null|Identifies the element that provides an error message for the object.
@see aria-invalid
@see aria-describedby.|
|aria-expanded|Booleanish|null|Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.|
|aria-flowto|string|null|Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.|
|aria-grabbed|Booleanish|null|Indicates an element's "grabbed" state in a drag-and-drop operation.
@deprecated in ARIA 1.1|
|aria-haspopup|boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree"|null|Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.|
|aria-hidden|Booleanish|null|Indicates whether the element is exposed to an accessibility API.
@see aria-disabled.|
|aria-invalid|boolean | "true" | "false" | "grammar" | "spelling"|null|Indicates the entered value does not conform to the format expected by the application.
@see aria-errormessage.|
|aria-keyshortcuts|string|null|Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.|
|aria-label|string|null|Defines a string value that labels the current element.
@see aria-labelledby.|
|aria-labelledby|string|null|Identifies the element (or elements) that labels the current element.
@see aria-describedby.|
|aria-level|number|null|Defines the hierarchical level of an element within a structure.|
|aria-live|"off" | "assertive" | "polite"|null|Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.|
|aria-modal|Booleanish|null|Indicates whether an element is modal when displayed.|
|aria-multiline|Booleanish|null|Indicates whether a text box accepts multiple lines of input or only a single line.|
|aria-multiselectable|Booleanish|null|Indicates that the user may select more than one item from the current selectable descendants.|
|aria-orientation|"horizontal" | "vertical"|null|Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.|
|aria-owns|string|null|Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
@see aria-controls.|
|aria-placeholder|string|null|Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.|
|aria-posinset|number|null|Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
@see aria-setsize.|
|aria-pressed|boolean | "true" | "false" | "mixed"|null|Indicates the current "pressed" state of toggle buttons.
@see aria-checked
@see aria-selected.|
|aria-readonly|Booleanish|null|Indicates that the element is not editable, but is otherwise operable.
@see aria-disabled.|
|aria-relevant|"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals"|null|Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
@see aria-atomic.|
|aria-required|Booleanish|null|Indicates that user input is required on the element before a form may be submitted.|
|aria-roledescription|string|null|Defines a human-readable, author-localized description for the role of an element.|
|aria-rowcount|number|null|Defines the total number of rows in a table, grid, or treegrid.
@see aria-rowindex.|
|aria-rowindex|number|null|Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
@see aria-rowcount
@see aria-rowspan.|
|aria-rowspan|number|null|Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
@see aria-rowindex
@see aria-colspan.|
|aria-selected|Booleanish|null|Indicates the current "selected" state of various widgets.
@see aria-checked
@see aria-pressed.|
|aria-setsize|number|null|Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
@see aria-posinset.|
|aria-sort|"none" | "ascending" | "descending" | "other"|null|Indicates if items in a table or grid are sorted in ascending or descending order.|
|aria-valuemax|number|null|Defines the maximum allowed value for a range widget.|
|aria-valuemin|number|null|Defines the minimum allowed value for a range widget.|
|aria-valuenow|number|null|Defines the current value for a range widget.
@see aria-valuetext.|
|aria-valuetext|string|null|Defines the human readable text alternative of aria-valuenow for a range widget.|
|dangerouslySetInnerHTML|{ __html: string; }|null||
|onCopy|ClipboardEventHandler<HTMLDivElement>|null||
|onCopyCapture|ClipboardEventHandler<HTMLDivElement>|null||
|onCut|ClipboardEventHandler<HTMLDivElement>|null||
|onCutCapture|ClipboardEventHandler<HTMLDivElement>|null||
|onPaste|ClipboardEventHandler<HTMLDivElement>|null||
|onPasteCapture|ClipboardEventHandler<HTMLDivElement>|null||
|onCompositionEnd|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionEndCapture|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionStart|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionStartCapture|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionUpdate|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionUpdateCapture|CompositionEventHandler<HTMLDivElement>|null||
|onFocus|FocusEventHandler<HTMLDivElement>|null||
|onFocusCapture|FocusEventHandler<HTMLDivElement>|null||
|onBlur|FocusEventHandler<HTMLDivElement>|null||
|onBlurCapture|FocusEventHandler<HTMLDivElement>|null||
|onChange|FormEventHandler<HTMLDivElement>|null||
|onChangeCapture|FormEventHandler<HTMLDivElement>|null||
|onBeforeInput|FormEventHandler<HTMLDivElement>|null||
|onBeforeInputCapture|FormEventHandler<HTMLDivElement>|null||
|onInput|FormEventHandler<HTMLDivElement>|null||
|onInputCapture|FormEventHandler<HTMLDivElement>|null||
|onReset|FormEventHandler<HTMLDivElement>|null||
|onResetCapture|FormEventHandler<HTMLDivElement>|null||
|onSubmit|FormEventHandler<HTMLDivElement>|null||
|onSubmitCapture|FormEventHandler<HTMLDivElement>|null||
|onInvalid|FormEventHandler<HTMLDivElement>|null||
|onInvalidCapture|FormEventHandler<HTMLDivElement>|null||
|onLoad|ReactEventHandler<HTMLDivElement>|null||
|onLoadCapture|ReactEventHandler<HTMLDivElement>|null||
|onError|ReactEventHandler<HTMLDivElement>|null||
|onErrorCapture|ReactEventHandler<HTMLDivElement>|null||
|onKeyDown|KeyboardEventHandler<HTMLDivElement>|null||
|onKeyDownCapture|KeyboardEventHandler<HTMLDivElement>|null||
|onKeyPress|KeyboardEventHandler<HTMLDivElement>|null|@deprecated|
|onKeyPressCapture|KeyboardEventHandler<HTMLDivElement>|null|@deprecated|
|onKeyUp|KeyboardEventHandler<HTMLDivElement>|null||
|onKeyUpCapture|KeyboardEventHandler<HTMLDivElement>|null||
|onAbort|ReactEventHandler<HTMLDivElement>|null||
|onAbortCapture|ReactEventHandler<HTMLDivElement>|null||
|onCanPlay|ReactEventHandler<HTMLDivElement>|null||
|onCanPlayCapture|ReactEventHandler<HTMLDivElement>|null||
|onCanPlayThrough|ReactEventHandler<HTMLDivElement>|null||
|onCanPlayThroughCapture|ReactEventHandler<HTMLDivElement>|null||
|onDurationChange|ReactEventHandler<HTMLDivElement>|null||
|onDurationChangeCapture|ReactEventHandler<HTMLDivElement>|null||
|onEmptied|ReactEventHandler<HTMLDivElement>|null||
|onEmptiedCapture|ReactEventHandler<HTMLDivElement>|null||
|onEncrypted|ReactEventHandler<HTMLDivElement>|null||
|onEncryptedCapture|ReactEventHandler<HTMLDivElement>|null||
|onEnded|ReactEventHandler<HTMLDivElement>|null||
|onEndedCapture|ReactEventHandler<HTMLDivElement>|null||
|onLoadedData|ReactEventHandler<HTMLDivElement>|null||
|onLoadedDataCapture|ReactEventHandler<HTMLDivElement>|null||
|onLoadedMetadata|ReactEventHandler<HTMLDivElement>|null||
|onLoadedMetadataCapture|ReactEventHandler<HTMLDivElement>|null||
|onLoadStart|ReactEventHandler<HTMLDivElement>|null||
|onLoadStartCapture|ReactEventHandler<HTMLDivElement>|null||
|onPause|ReactEventHandler<HTMLDivElement>|null||
|onPauseCapture|ReactEventHandler<HTMLDivElement>|null||
|onPlay|ReactEventHandler<HTMLDivElement>|null||
|onPlayCapture|ReactEventHandler<HTMLDivElement>|null||
|onPlaying|ReactEventHandler<HTMLDivElement>|null||
|onPlayingCapture|ReactEventHandler<HTMLDivElement>|null||
|onProgress|ReactEventHandler<HTMLDivElement>|null||
|onProgressCapture|ReactEventHandler<HTMLDivElement>|null||
|onRateChange|ReactEventHandler<HTMLDivElement>|null||
|onRateChangeCapture|ReactEventHandler<HTMLDivElement>|null||
|onSeeked|ReactEventHandler<HTMLDivElement>|null||
|onSeekedCapture|ReactEventHandler<HTMLDivElement>|null||
|onSeeking|ReactEventHandler<HTMLDivElement>|null||
|onSeekingCapture|ReactEventHandler<HTMLDivElement>|null||
|onStalled|ReactEventHandler<HTMLDivElement>|null||
|onStalledCapture|ReactEventHandler<HTMLDivElement>|null||
|onSuspend|ReactEventHandler<HTMLDivElement>|null||
|onSuspendCapture|ReactEventHandler<HTMLDivElement>|null||
|onTimeUpdate|ReactEventHandler<HTMLDivElement>|null||
|onTimeUpdateCapture|ReactEventHandler<HTMLDivElement>|null||
|onVolumeChange|ReactEventHandler<HTMLDivElement>|null||
|onVolumeChangeCapture|ReactEventHandler<HTMLDivElement>|null||
|onWaiting|ReactEventHandler<HTMLDivElement>|null||
|onWaitingCapture|ReactEventHandler<HTMLDivElement>|null||
|onAuxClick|MouseEventHandler<HTMLDivElement>|null||
|onAuxClickCapture|MouseEventHandler<HTMLDivElement>|null||
|onClick|MouseEventHandler<HTMLDivElement>|null||
|onClickCapture|MouseEventHandler<HTMLDivElement>|null||
|onContextMenu|MouseEventHandler<HTMLDivElement>|null||
|onContextMenuCapture|MouseEventHandler<HTMLDivElement>|null||
|onDoubleClick|MouseEventHandler<HTMLDivElement>|null||
|onDoubleClickCapture|MouseEventHandler<HTMLDivElement>|null||
|onDrag|DragEventHandler<HTMLDivElement>|null||
|onDragCapture|DragEventHandler<HTMLDivElement>|null||
|onDragEnd|DragEventHandler<HTMLDivElement>|null||
|onDragEndCapture|DragEventHandler<HTMLDivElement>|null||
|onDragEnter|DragEventHandler<HTMLDivElement>|null||
|onDragEnterCapture|DragEventHandler<HTMLDivElement>|null||
|onDragExit|DragEventHandler<HTMLDivElement>|null||
|onDragExitCapture|DragEventHandler<HTMLDivElement>|null||
|onDragLeave|DragEventHandler<HTMLDivElement>|null||
|onDragLeaveCapture|DragEventHandler<HTMLDivElement>|null||
|onDragOver|DragEventHandler<HTMLDivElement>|null||
|onDragOverCapture|DragEventHandler<HTMLDivElement>|null||
|onDragStart|DragEventHandler<HTMLDivElement>|null||
|onDragStartCapture|DragEventHandler<HTMLDivElement>|null||
|onDrop|DragEventHandler<HTMLDivElement>|null||
|onDropCapture|DragEventHandler<HTMLDivElement>|null||
|onMouseDown|MouseEventHandler<HTMLDivElement>|null||
|onMouseDownCapture|MouseEventHandler<HTMLDivElement>|null||
|onMouseEnter|MouseEventHandler<HTMLDivElement>|null||
|onMouseLeave|MouseEventHandler<HTMLDivElement>|null||
|onMouseMove|MouseEventHandler<HTMLDivElement>|null||
|onMouseMoveCapture|MouseEventHandler<HTMLDivElement>|null||
|onMouseOut|MouseEventHandler<HTMLDivElement>|null||
|onMouseOutCapture|MouseEventHandler<HTMLDivElement>|null||
|onMouseOver|MouseEventHandler<HTMLDivElement>|null||
|onMouseOverCapture|MouseEventHandler<HTMLDivElement>|null||
|onMouseUp|MouseEventHandler<HTMLDivElement>|null||
|onMouseUpCapture|MouseEventHandler<HTMLDivElement>|null||
|onSelect|ReactEventHandler<HTMLDivElement>|null||
|onSelectCapture|ReactEventHandler<HTMLDivElement>|null||
|onTouchCancel|TouchEventHandler<HTMLDivElement>|null||
|onTouchCancelCapture|TouchEventHandler<HTMLDivElement>|null||
|onTouchEnd|TouchEventHandler<HTMLDivElement>|null||
|onTouchEndCapture|TouchEventHandler<HTMLDivElement>|null||
|onTouchMove|TouchEventHandler<HTMLDivElement>|null||
|onTouchMoveCapture|TouchEventHandler<HTMLDivElement>|null||
|onTouchStart|TouchEventHandler<HTMLDivElement>|null||
|onTouchStartCapture|TouchEventHandler<HTMLDivElement>|null||
|onPointerDown|PointerEventHandler<HTMLDivElement>|null||
|onPointerDownCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerMove|PointerEventHandler<HTMLDivElement>|null||
|onPointerMoveCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerUp|PointerEventHandler<HTMLDivElement>|null||
|onPointerUpCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerCancel|PointerEventHandler<HTMLDivElement>|null||
|onPointerCancelCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerEnter|PointerEventHandler<HTMLDivElement>|null||
|onPointerEnterCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerLeave|PointerEventHandler<HTMLDivElement>|null||
|onPointerLeaveCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerOver|PointerEventHandler<HTMLDivElement>|null||
|onPointerOverCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerOut|PointerEventHandler<HTMLDivElement>|null||
|onPointerOutCapture|PointerEventHandler<HTMLDivElement>|null||
|onGotPointerCapture|PointerEventHandler<HTMLDivElement>|null||
|onGotPointerCaptureCapture|PointerEventHandler<HTMLDivElement>|null||
|onLostPointerCapture|PointerEventHandler<HTMLDivElement>|null||
|onLostPointerCaptureCapture|PointerEventHandler<HTMLDivElement>|null||
|onScroll|UIEventHandler<HTMLDivElement>|null||
|onScrollCapture|UIEventHandler<HTMLDivElement>|null||
|onWheel|WheelEventHandler<HTMLDivElement>|null||
|onWheelCapture|WheelEventHandler<HTMLDivElement>|null||
|onAnimationStart|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationStartCapture|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationEnd|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationEndCapture|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationIteration|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationIterationCapture|AnimationEventHandler<HTMLDivElement>|null||
|onTransitionEnd|TransitionEventHandler<HTMLDivElement>|null||
|onTransitionEndCapture|TransitionEventHandler<HTMLDivElement>|null||
|ref|Ref<HTMLDivElement>|null||
|isError|boolean|null|errorが発生したかどうか|
|errorMessage|string|null|isError = trueの場合に表示するエラーメッセージ|
|inputProps|Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>> & { ...; }|null|input elementへ渡すprops|
<!-- prettier-ignore-end -->

<!-- end generate props table -->

<!-- このセクションは自動で作成されます。自分で編集しないでください。 -->

## Props

<!-- prettier-ignore-start -->

| Name   | Type   | Default | Description |
| :----- | :----- | :------ | :---------- |
|slot|string|null||
|style|CSSProperties|null||
|title|string|null||
|key|Key|null||
|defaultChecked|boolean|null||
|defaultValue|string | number | readonly string[]|null||
|suppressContentEditableWarning|boolean|null||
|suppressHydrationWarning|boolean|null||
|accessKey|string|null||
|className|string|null||
|contentEditable|Booleanish | "inherit"|null||
|contextMenu|string|null||
|dir|string|null||
|draggable|Booleanish|null||
|hidden|boolean|null||
|id|string|null||
|lang|string|null||
|placeholder|string|null||
|spellCheck|Booleanish|null||
|tabIndex|number|null||
|translate|"yes" | "no"|null||
|radioGroup|string|null||
|role|AriaRole|null||
|about|string|null||
|datatype|string|null||
|inlist|any|null||
|prefix|string|null||
|property|string|null||
|resource|string|null||
|typeof|string|null||
|vocab|string|null||
|autoCapitalize|string|null||
|autoCorrect|string|null||
|autoSave|string|null||
|color|string|null||
|itemProp|string|null||
|itemScope|boolean|null||
|itemType|string|null||
|itemID|string|null||
|itemRef|string|null||
|results|number|null||
|security|string|null||
|unselectable|"on" | "off"|null||
|inputMode|"text" | "none" | "search" | "tel" | "url" | "email" | "numeric" | "decimal"|null|Hints at the type of data that might be entered by the user while editing the element or its contents
@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute|
|is|string|null|Specify that a standard HTML element should behave like a defined custom built-in element
@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is|
|aria-activedescendant|string|null|Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.|
|aria-atomic|Booleanish|null|Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.|
|aria-autocomplete|"list" | "none" | "inline" | "both"|null|Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.|
|aria-busy|Booleanish|null|Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.|
|aria-checked|boolean | "true" | "false" | "mixed"|null|Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
@see aria-pressed
@see aria-selected.|
|aria-colcount|number|null|Defines the total number of columns in a table, grid, or treegrid.
@see aria-colindex.|
|aria-colindex|number|null|Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
@see aria-colcount
@see aria-colspan.|
|aria-colspan|number|null|Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
@see aria-colindex
@see aria-rowspan.|
|aria-controls|string|null|Identifies the element (or elements) whose contents or presence are controlled by the current element.
@see aria-owns.|
|aria-current|boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date"|null|Indicates the element that represents the current item within a container or set of related elements.|
|aria-describedby|string|null|Identifies the element (or elements) that describes the object.
@see aria-labelledby|
|aria-details|string|null|Identifies the element that provides a detailed, extended description for the object.
@see aria-describedby.|
|aria-disabled|Booleanish|null|Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
@see aria-hidden
@see aria-readonly.|
|aria-dropeffect|"link" | "none" | "copy" | "execute" | "move" | "popup"|null|Indicates what functions can be performed when a dragged object is released on the drop target.
@deprecated in ARIA 1.1|
|aria-errormessage|string|null|Identifies the element that provides an error message for the object.
@see aria-invalid
@see aria-describedby.|
|aria-expanded|Booleanish|null|Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.|
|aria-flowto|string|null|Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.|
|aria-grabbed|Booleanish|null|Indicates an element's "grabbed" state in a drag-and-drop operation.
@deprecated in ARIA 1.1|
|aria-haspopup|boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree"|null|Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.|
|aria-hidden|Booleanish|null|Indicates whether the element is exposed to an accessibility API.
@see aria-disabled.|
|aria-invalid|boolean | "true" | "false" | "grammar" | "spelling"|null|Indicates the entered value does not conform to the format expected by the application.
@see aria-errormessage.|
|aria-keyshortcuts|string|null|Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.|
|aria-label|string|null|Defines a string value that labels the current element.
@see aria-labelledby.|
|aria-labelledby|string|null|Identifies the element (or elements) that labels the current element.
@see aria-describedby.|
|aria-level|number|null|Defines the hierarchical level of an element within a structure.|
|aria-live|"off" | "assertive" | "polite"|null|Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.|
|aria-modal|Booleanish|null|Indicates whether an element is modal when displayed.|
|aria-multiline|Booleanish|null|Indicates whether a text box accepts multiple lines of input or only a single line.|
|aria-multiselectable|Booleanish|null|Indicates that the user may select more than one item from the current selectable descendants.|
|aria-orientation|"horizontal" | "vertical"|null|Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.|
|aria-owns|string|null|Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
@see aria-controls.|
|aria-placeholder|string|null|Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.|
|aria-posinset|number|null|Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
@see aria-setsize.|
|aria-pressed|boolean | "true" | "false" | "mixed"|null|Indicates the current "pressed" state of toggle buttons.
@see aria-checked
@see aria-selected.|
|aria-readonly|Booleanish|null|Indicates that the element is not editable, but is otherwise operable.
@see aria-disabled.|
|aria-relevant|"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals"|null|Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
@see aria-atomic.|
|aria-required|Booleanish|null|Indicates that user input is required on the element before a form may be submitted.|
|aria-roledescription|string|null|Defines a human-readable, author-localized description for the role of an element.|
|aria-rowcount|number|null|Defines the total number of rows in a table, grid, or treegrid.
@see aria-rowindex.|
|aria-rowindex|number|null|Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
@see aria-rowcount
@see aria-rowspan.|
|aria-rowspan|number|null|Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
@see aria-rowindex
@see aria-colspan.|
|aria-selected|Booleanish|null|Indicates the current "selected" state of various widgets.
@see aria-checked
@see aria-pressed.|
|aria-setsize|number|null|Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
@see aria-posinset.|
|aria-sort|"none" | "ascending" | "descending" | "other"|null|Indicates if items in a table or grid are sorted in ascending or descending order.|
|aria-valuemax|number|null|Defines the maximum allowed value for a range widget.|
|aria-valuemin|number|null|Defines the minimum allowed value for a range widget.|
|aria-valuenow|number|null|Defines the current value for a range widget.
@see aria-valuetext.|
|aria-valuetext|string|null|Defines the human readable text alternative of aria-valuenow for a range widget.|
|dangerouslySetInnerHTML|{ __html: string; }|null||
|onCopy|ClipboardEventHandler<HTMLDivElement>|null||
|onCopyCapture|ClipboardEventHandler<HTMLDivElement>|null||
|onCut|ClipboardEventHandler<HTMLDivElement>|null||
|onCutCapture|ClipboardEventHandler<HTMLDivElement>|null||
|onPaste|ClipboardEventHandler<HTMLDivElement>|null||
|onPasteCapture|ClipboardEventHandler<HTMLDivElement>|null||
|onCompositionEnd|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionEndCapture|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionStart|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionStartCapture|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionUpdate|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionUpdateCapture|CompositionEventHandler<HTMLDivElement>|null||
|onFocus|FocusEventHandler<HTMLDivElement>|null||
|onFocusCapture|FocusEventHandler<HTMLDivElement>|null||
|onBlur|FocusEventHandler<HTMLDivElement>|null||
|onBlurCapture|FocusEventHandler<HTMLDivElement>|null||
|onChange|FormEventHandler<HTMLDivElement>|null||
|onChangeCapture|FormEventHandler<HTMLDivElement>|null||
|onBeforeInput|FormEventHandler<HTMLDivElement>|null||
|onBeforeInputCapture|FormEventHandler<HTMLDivElement>|null||
|onInput|FormEventHandler<HTMLDivElement>|null||
|onInputCapture|FormEventHandler<HTMLDivElement>|null||
|onReset|FormEventHandler<HTMLDivElement>|null||
|onResetCapture|FormEventHandler<HTMLDivElement>|null||
|onSubmit|FormEventHandler<HTMLDivElement>|null||
|onSubmitCapture|FormEventHandler<HTMLDivElement>|null||
|onInvalid|FormEventHandler<HTMLDivElement>|null||
|onInvalidCapture|FormEventHandler<HTMLDivElement>|null||
|onLoad|ReactEventHandler<HTMLDivElement>|null||
|onLoadCapture|ReactEventHandler<HTMLDivElement>|null||
|onError|ReactEventHandler<HTMLDivElement>|null||
|onErrorCapture|ReactEventHandler<HTMLDivElement>|null||
|onKeyDown|KeyboardEventHandler<HTMLDivElement>|null||
|onKeyDownCapture|KeyboardEventHandler<HTMLDivElement>|null||
|onKeyPress|KeyboardEventHandler<HTMLDivElement>|null|@deprecated|
|onKeyPressCapture|KeyboardEventHandler<HTMLDivElement>|null|@deprecated|
|onKeyUp|KeyboardEventHandler<HTMLDivElement>|null||
|onKeyUpCapture|KeyboardEventHandler<HTMLDivElement>|null||
|onAbort|ReactEventHandler<HTMLDivElement>|null||
|onAbortCapture|ReactEventHandler<HTMLDivElement>|null||
|onCanPlay|ReactEventHandler<HTMLDivElement>|null||
|onCanPlayCapture|ReactEventHandler<HTMLDivElement>|null||
|onCanPlayThrough|ReactEventHandler<HTMLDivElement>|null||
|onCanPlayThroughCapture|ReactEventHandler<HTMLDivElement>|null||
|onDurationChange|ReactEventHandler<HTMLDivElement>|null||
|onDurationChangeCapture|ReactEventHandler<HTMLDivElement>|null||
|onEmptied|ReactEventHandler<HTMLDivElement>|null||
|onEmptiedCapture|ReactEventHandler<HTMLDivElement>|null||
|onEncrypted|ReactEventHandler<HTMLDivElement>|null||
|onEncryptedCapture|ReactEventHandler<HTMLDivElement>|null||
|onEnded|ReactEventHandler<HTMLDivElement>|null||
|onEndedCapture|ReactEventHandler<HTMLDivElement>|null||
|onLoadedData|ReactEventHandler<HTMLDivElement>|null||
|onLoadedDataCapture|ReactEventHandler<HTMLDivElement>|null||
|onLoadedMetadata|ReactEventHandler<HTMLDivElement>|null||
|onLoadedMetadataCapture|ReactEventHandler<HTMLDivElement>|null||
|onLoadStart|ReactEventHandler<HTMLDivElement>|null||
|onLoadStartCapture|ReactEventHandler<HTMLDivElement>|null||
|onPause|ReactEventHandler<HTMLDivElement>|null||
|onPauseCapture|ReactEventHandler<HTMLDivElement>|null||
|onPlay|ReactEventHandler<HTMLDivElement>|null||
|onPlayCapture|ReactEventHandler<HTMLDivElement>|null||
|onPlaying|ReactEventHandler<HTMLDivElement>|null||
|onPlayingCapture|ReactEventHandler<HTMLDivElement>|null||
|onProgress|ReactEventHandler<HTMLDivElement>|null||
|onProgressCapture|ReactEventHandler<HTMLDivElement>|null||
|onRateChange|ReactEventHandler<HTMLDivElement>|null||
|onRateChangeCapture|ReactEventHandler<HTMLDivElement>|null||
|onSeeked|ReactEventHandler<HTMLDivElement>|null||
|onSeekedCapture|ReactEventHandler<HTMLDivElement>|null||
|onSeeking|ReactEventHandler<HTMLDivElement>|null||
|onSeekingCapture|ReactEventHandler<HTMLDivElement>|null||
|onStalled|ReactEventHandler<HTMLDivElement>|null||
|onStalledCapture|ReactEventHandler<HTMLDivElement>|null||
|onSuspend|ReactEventHandler<HTMLDivElement>|null||
|onSuspendCapture|ReactEventHandler<HTMLDivElement>|null||
|onTimeUpdate|ReactEventHandler<HTMLDivElement>|null||
|onTimeUpdateCapture|ReactEventHandler<HTMLDivElement>|null||
|onVolumeChange|ReactEventHandler<HTMLDivElement>|null||
|onVolumeChangeCapture|ReactEventHandler<HTMLDivElement>|null||
|onWaiting|ReactEventHandler<HTMLDivElement>|null||
|onWaitingCapture|ReactEventHandler<HTMLDivElement>|null||
|onAuxClick|MouseEventHandler<HTMLDivElement>|null||
|onAuxClickCapture|MouseEventHandler<HTMLDivElement>|null||
|onClick|MouseEventHandler<HTMLDivElement>|null||
|onClickCapture|MouseEventHandler<HTMLDivElement>|null||
|onContextMenu|MouseEventHandler<HTMLDivElement>|null||
|onContextMenuCapture|MouseEventHandler<HTMLDivElement>|null||
|onDoubleClick|MouseEventHandler<HTMLDivElement>|null||
|onDoubleClickCapture|MouseEventHandler<HTMLDivElement>|null||
|onDrag|DragEventHandler<HTMLDivElement>|null||
|onDragCapture|DragEventHandler<HTMLDivElement>|null||
|onDragEnd|DragEventHandler<HTMLDivElement>|null||
|onDragEndCapture|DragEventHandler<HTMLDivElement>|null||
|onDragEnter|DragEventHandler<HTMLDivElement>|null||
|onDragEnterCapture|DragEventHandler<HTMLDivElement>|null||
|onDragExit|DragEventHandler<HTMLDivElement>|null||
|onDragExitCapture|DragEventHandler<HTMLDivElement>|null||
|onDragLeave|DragEventHandler<HTMLDivElement>|null||
|onDragLeaveCapture|DragEventHandler<HTMLDivElement>|null||
|onDragOver|DragEventHandler<HTMLDivElement>|null||
|onDragOverCapture|DragEventHandler<HTMLDivElement>|null||
|onDragStart|DragEventHandler<HTMLDivElement>|null||
|onDragStartCapture|DragEventHandler<HTMLDivElement>|null||
|onDrop|DragEventHandler<HTMLDivElement>|null||
|onDropCapture|DragEventHandler<HTMLDivElement>|null||
|onMouseDown|MouseEventHandler<HTMLDivElement>|null||
|onMouseDownCapture|MouseEventHandler<HTMLDivElement>|null||
|onMouseEnter|MouseEventHandler<HTMLDivElement>|null||
|onMouseLeave|MouseEventHandler<HTMLDivElement>|null||
|onMouseMove|MouseEventHandler<HTMLDivElement>|null||
|onMouseMoveCapture|MouseEventHandler<HTMLDivElement>|null||
|onMouseOut|MouseEventHandler<HTMLDivElement>|null||
|onMouseOutCapture|MouseEventHandler<HTMLDivElement>|null||
|onMouseOver|MouseEventHandler<HTMLDivElement>|null||
|onMouseOverCapture|MouseEventHandler<HTMLDivElement>|null||
|onMouseUp|MouseEventHandler<HTMLDivElement>|null||
|onMouseUpCapture|MouseEventHandler<HTMLDivElement>|null||
|onSelect|ReactEventHandler<HTMLDivElement>|null||
|onSelectCapture|ReactEventHandler<HTMLDivElement>|null||
|onTouchCancel|TouchEventHandler<HTMLDivElement>|null||
|onTouchCancelCapture|TouchEventHandler<HTMLDivElement>|null||
|onTouchEnd|TouchEventHandler<HTMLDivElement>|null||
|onTouchEndCapture|TouchEventHandler<HTMLDivElement>|null||
|onTouchMove|TouchEventHandler<HTMLDivElement>|null||
|onTouchMoveCapture|TouchEventHandler<HTMLDivElement>|null||
|onTouchStart|TouchEventHandler<HTMLDivElement>|null||
|onTouchStartCapture|TouchEventHandler<HTMLDivElement>|null||
|onPointerDown|PointerEventHandler<HTMLDivElement>|null||
|onPointerDownCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerMove|PointerEventHandler<HTMLDivElement>|null||
|onPointerMoveCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerUp|PointerEventHandler<HTMLDivElement>|null||
|onPointerUpCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerCancel|PointerEventHandler<HTMLDivElement>|null||
|onPointerCancelCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerEnter|PointerEventHandler<HTMLDivElement>|null||
|onPointerEnterCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerLeave|PointerEventHandler<HTMLDivElement>|null||
|onPointerLeaveCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerOver|PointerEventHandler<HTMLDivElement>|null||
|onPointerOverCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerOut|PointerEventHandler<HTMLDivElement>|null||
|onPointerOutCapture|PointerEventHandler<HTMLDivElement>|null||
|onGotPointerCapture|PointerEventHandler<HTMLDivElement>|null||
|onGotPointerCaptureCapture|PointerEventHandler<HTMLDivElement>|null||
|onLostPointerCapture|PointerEventHandler<HTMLDivElement>|null||
|onLostPointerCaptureCapture|PointerEventHandler<HTMLDivElement>|null||
|onScroll|UIEventHandler<HTMLDivElement>|null||
|onScrollCapture|UIEventHandler<HTMLDivElement>|null||
|onWheel|WheelEventHandler<HTMLDivElement>|null||
|onWheelCapture|WheelEventHandler<HTMLDivElement>|null||
|onAnimationStart|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationStartCapture|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationEnd|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationEndCapture|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationIteration|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationIterationCapture|AnimationEventHandler<HTMLDivElement>|null||
|onTransitionEnd|TransitionEventHandler<HTMLDivElement>|null||
|onTransitionEndCapture|TransitionEventHandler<HTMLDivElement>|null||
|ref|Ref<HTMLDivElement>|null||
|isError|boolean|null|errorが発生したかどうか|
|errorMessage|string|null|isError = trueの場合に表示するエラーメッセージ|
|inputProps|Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>> & { ...; }|null|input elementへ渡すprops|
<!-- prettier-ignore-end -->

<!-- このセクションは自動で作成されます。自分で編集しないでください。 -->
<!-- prettier-ignore-start -->
## Props

| Name   | Type   | Default | Description |
| :----- | :----- | :------ | :---------- |
|slot|string|null||
|style|CSSProperties|null||
|title|string|null||
|key|Key|null||
|defaultChecked|boolean|null||
|defaultValue|string | number | readonly string[]|null||
|suppressContentEditableWarning|boolean|null||
|suppressHydrationWarning|boolean|null||
|accessKey|string|null||
|className|string|null||
|contentEditable|Booleanish | "inherit"|null||
|contextMenu|string|null||
|dir|string|null||
|draggable|Booleanish|null||
|hidden|boolean|null||
|id|string|null||
|lang|string|null||
|placeholder|string|null||
|spellCheck|Booleanish|null||
|tabIndex|number|null||
|translate|"yes" | "no"|null||
|radioGroup|string|null||
|role|AriaRole|null||
|about|string|null||
|datatype|string|null||
|inlist|any|null||
|prefix|string|null||
|property|string|null||
|resource|string|null||
|typeof|string|null||
|vocab|string|null||
|autoCapitalize|string|null||
|autoCorrect|string|null||
|autoSave|string|null||
|color|string|null||
|itemProp|string|null||
|itemScope|boolean|null||
|itemType|string|null||
|itemID|string|null||
|itemRef|string|null||
|results|number|null||
|security|string|null||
|unselectable|"on" | "off"|null||
|inputMode|"text" | "none" | "search" | "tel" | "url" | "email" | "numeric" | "decimal"|null|Hints at the type of data that might be entered by the user while editing the element or its contents
@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute|
|is|string|null|Specify that a standard HTML element should behave like a defined custom built-in element
@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is|
|aria-activedescendant|string|null|Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.|
|aria-atomic|Booleanish|null|Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.|
|aria-autocomplete|"list" | "none" | "inline" | "both"|null|Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.|
|aria-busy|Booleanish|null|Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.|
|aria-checked|boolean | "true" | "false" | "mixed"|null|Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
@see aria-pressed
@see aria-selected.|
|aria-colcount|number|null|Defines the total number of columns in a table, grid, or treegrid.
@see aria-colindex.|
|aria-colindex|number|null|Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
@see aria-colcount
@see aria-colspan.|
|aria-colspan|number|null|Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
@see aria-colindex
@see aria-rowspan.|
|aria-controls|string|null|Identifies the element (or elements) whose contents or presence are controlled by the current element.
@see aria-owns.|
|aria-current|boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date"|null|Indicates the element that represents the current item within a container or set of related elements.|
|aria-describedby|string|null|Identifies the element (or elements) that describes the object.
@see aria-labelledby|
|aria-details|string|null|Identifies the element that provides a detailed, extended description for the object.
@see aria-describedby.|
|aria-disabled|Booleanish|null|Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
@see aria-hidden
@see aria-readonly.|
|aria-dropeffect|"link" | "none" | "copy" | "execute" | "move" | "popup"|null|Indicates what functions can be performed when a dragged object is released on the drop target.
@deprecated in ARIA 1.1|
|aria-errormessage|string|null|Identifies the element that provides an error message for the object.
@see aria-invalid
@see aria-describedby.|
|aria-expanded|Booleanish|null|Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.|
|aria-flowto|string|null|Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.|
|aria-grabbed|Booleanish|null|Indicates an element's "grabbed" state in a drag-and-drop operation.
@deprecated in ARIA 1.1|
|aria-haspopup|boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree"|null|Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.|
|aria-hidden|Booleanish|null|Indicates whether the element is exposed to an accessibility API.
@see aria-disabled.|
|aria-invalid|boolean | "true" | "false" | "grammar" | "spelling"|null|Indicates the entered value does not conform to the format expected by the application.
@see aria-errormessage.|
|aria-keyshortcuts|string|null|Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.|
|aria-label|string|null|Defines a string value that labels the current element.
@see aria-labelledby.|
|aria-labelledby|string|null|Identifies the element (or elements) that labels the current element.
@see aria-describedby.|
|aria-level|number|null|Defines the hierarchical level of an element within a structure.|
|aria-live|"off" | "assertive" | "polite"|null|Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.|
|aria-modal|Booleanish|null|Indicates whether an element is modal when displayed.|
|aria-multiline|Booleanish|null|Indicates whether a text box accepts multiple lines of input or only a single line.|
|aria-multiselectable|Booleanish|null|Indicates that the user may select more than one item from the current selectable descendants.|
|aria-orientation|"horizontal" | "vertical"|null|Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.|
|aria-owns|string|null|Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
@see aria-controls.|
|aria-placeholder|string|null|Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.|
|aria-posinset|number|null|Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
@see aria-setsize.|
|aria-pressed|boolean | "true" | "false" | "mixed"|null|Indicates the current "pressed" state of toggle buttons.
@see aria-checked
@see aria-selected.|
|aria-readonly|Booleanish|null|Indicates that the element is not editable, but is otherwise operable.
@see aria-disabled.|
|aria-relevant|"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals"|null|Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
@see aria-atomic.|
|aria-required|Booleanish|null|Indicates that user input is required on the element before a form may be submitted.|
|aria-roledescription|string|null|Defines a human-readable, author-localized description for the role of an element.|
|aria-rowcount|number|null|Defines the total number of rows in a table, grid, or treegrid.
@see aria-rowindex.|
|aria-rowindex|number|null|Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
@see aria-rowcount
@see aria-rowspan.|
|aria-rowspan|number|null|Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
@see aria-rowindex
@see aria-colspan.|
|aria-selected|Booleanish|null|Indicates the current "selected" state of various widgets.
@see aria-checked
@see aria-pressed.|
|aria-setsize|number|null|Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
@see aria-posinset.|
|aria-sort|"none" | "ascending" | "descending" | "other"|null|Indicates if items in a table or grid are sorted in ascending or descending order.|
|aria-valuemax|number|null|Defines the maximum allowed value for a range widget.|
|aria-valuemin|number|null|Defines the minimum allowed value for a range widget.|
|aria-valuenow|number|null|Defines the current value for a range widget.
@see aria-valuetext.|
|aria-valuetext|string|null|Defines the human readable text alternative of aria-valuenow for a range widget.|
|dangerouslySetInnerHTML|{ __html: string; }|null||
|onCopy|ClipboardEventHandler<HTMLDivElement>|null||
|onCopyCapture|ClipboardEventHandler<HTMLDivElement>|null||
|onCut|ClipboardEventHandler<HTMLDivElement>|null||
|onCutCapture|ClipboardEventHandler<HTMLDivElement>|null||
|onPaste|ClipboardEventHandler<HTMLDivElement>|null||
|onPasteCapture|ClipboardEventHandler<HTMLDivElement>|null||
|onCompositionEnd|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionEndCapture|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionStart|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionStartCapture|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionUpdate|CompositionEventHandler<HTMLDivElement>|null||
|onCompositionUpdateCapture|CompositionEventHandler<HTMLDivElement>|null||
|onFocus|FocusEventHandler<HTMLDivElement>|null||
|onFocusCapture|FocusEventHandler<HTMLDivElement>|null||
|onBlur|FocusEventHandler<HTMLDivElement>|null||
|onBlurCapture|FocusEventHandler<HTMLDivElement>|null||
|onChange|FormEventHandler<HTMLDivElement>|null||
|onChangeCapture|FormEventHandler<HTMLDivElement>|null||
|onBeforeInput|FormEventHandler<HTMLDivElement>|null||
|onBeforeInputCapture|FormEventHandler<HTMLDivElement>|null||
|onInput|FormEventHandler<HTMLDivElement>|null||
|onInputCapture|FormEventHandler<HTMLDivElement>|null||
|onReset|FormEventHandler<HTMLDivElement>|null||
|onResetCapture|FormEventHandler<HTMLDivElement>|null||
|onSubmit|FormEventHandler<HTMLDivElement>|null||
|onSubmitCapture|FormEventHandler<HTMLDivElement>|null||
|onInvalid|FormEventHandler<HTMLDivElement>|null||
|onInvalidCapture|FormEventHandler<HTMLDivElement>|null||
|onLoad|ReactEventHandler<HTMLDivElement>|null||
|onLoadCapture|ReactEventHandler<HTMLDivElement>|null||
|onError|ReactEventHandler<HTMLDivElement>|null||
|onErrorCapture|ReactEventHandler<HTMLDivElement>|null||
|onKeyDown|KeyboardEventHandler<HTMLDivElement>|null||
|onKeyDownCapture|KeyboardEventHandler<HTMLDivElement>|null||
|onKeyPress|KeyboardEventHandler<HTMLDivElement>|null|@deprecated|
|onKeyPressCapture|KeyboardEventHandler<HTMLDivElement>|null|@deprecated|
|onKeyUp|KeyboardEventHandler<HTMLDivElement>|null||
|onKeyUpCapture|KeyboardEventHandler<HTMLDivElement>|null||
|onAbort|ReactEventHandler<HTMLDivElement>|null||
|onAbortCapture|ReactEventHandler<HTMLDivElement>|null||
|onCanPlay|ReactEventHandler<HTMLDivElement>|null||
|onCanPlayCapture|ReactEventHandler<HTMLDivElement>|null||
|onCanPlayThrough|ReactEventHandler<HTMLDivElement>|null||
|onCanPlayThroughCapture|ReactEventHandler<HTMLDivElement>|null||
|onDurationChange|ReactEventHandler<HTMLDivElement>|null||
|onDurationChangeCapture|ReactEventHandler<HTMLDivElement>|null||
|onEmptied|ReactEventHandler<HTMLDivElement>|null||
|onEmptiedCapture|ReactEventHandler<HTMLDivElement>|null||
|onEncrypted|ReactEventHandler<HTMLDivElement>|null||
|onEncryptedCapture|ReactEventHandler<HTMLDivElement>|null||
|onEnded|ReactEventHandler<HTMLDivElement>|null||
|onEndedCapture|ReactEventHandler<HTMLDivElement>|null||
|onLoadedData|ReactEventHandler<HTMLDivElement>|null||
|onLoadedDataCapture|ReactEventHandler<HTMLDivElement>|null||
|onLoadedMetadata|ReactEventHandler<HTMLDivElement>|null||
|onLoadedMetadataCapture|ReactEventHandler<HTMLDivElement>|null||
|onLoadStart|ReactEventHandler<HTMLDivElement>|null||
|onLoadStartCapture|ReactEventHandler<HTMLDivElement>|null||
|onPause|ReactEventHandler<HTMLDivElement>|null||
|onPauseCapture|ReactEventHandler<HTMLDivElement>|null||
|onPlay|ReactEventHandler<HTMLDivElement>|null||
|onPlayCapture|ReactEventHandler<HTMLDivElement>|null||
|onPlaying|ReactEventHandler<HTMLDivElement>|null||
|onPlayingCapture|ReactEventHandler<HTMLDivElement>|null||
|onProgress|ReactEventHandler<HTMLDivElement>|null||
|onProgressCapture|ReactEventHandler<HTMLDivElement>|null||
|onRateChange|ReactEventHandler<HTMLDivElement>|null||
|onRateChangeCapture|ReactEventHandler<HTMLDivElement>|null||
|onSeeked|ReactEventHandler<HTMLDivElement>|null||
|onSeekedCapture|ReactEventHandler<HTMLDivElement>|null||
|onSeeking|ReactEventHandler<HTMLDivElement>|null||
|onSeekingCapture|ReactEventHandler<HTMLDivElement>|null||
|onStalled|ReactEventHandler<HTMLDivElement>|null||
|onStalledCapture|ReactEventHandler<HTMLDivElement>|null||
|onSuspend|ReactEventHandler<HTMLDivElement>|null||
|onSuspendCapture|ReactEventHandler<HTMLDivElement>|null||
|onTimeUpdate|ReactEventHandler<HTMLDivElement>|null||
|onTimeUpdateCapture|ReactEventHandler<HTMLDivElement>|null||
|onVolumeChange|ReactEventHandler<HTMLDivElement>|null||
|onVolumeChangeCapture|ReactEventHandler<HTMLDivElement>|null||
|onWaiting|ReactEventHandler<HTMLDivElement>|null||
|onWaitingCapture|ReactEventHandler<HTMLDivElement>|null||
|onAuxClick|MouseEventHandler<HTMLDivElement>|null||
|onAuxClickCapture|MouseEventHandler<HTMLDivElement>|null||
|onClick|MouseEventHandler<HTMLDivElement>|null||
|onClickCapture|MouseEventHandler<HTMLDivElement>|null||
|onContextMenu|MouseEventHandler<HTMLDivElement>|null||
|onContextMenuCapture|MouseEventHandler<HTMLDivElement>|null||
|onDoubleClick|MouseEventHandler<HTMLDivElement>|null||
|onDoubleClickCapture|MouseEventHandler<HTMLDivElement>|null||
|onDrag|DragEventHandler<HTMLDivElement>|null||
|onDragCapture|DragEventHandler<HTMLDivElement>|null||
|onDragEnd|DragEventHandler<HTMLDivElement>|null||
|onDragEndCapture|DragEventHandler<HTMLDivElement>|null||
|onDragEnter|DragEventHandler<HTMLDivElement>|null||
|onDragEnterCapture|DragEventHandler<HTMLDivElement>|null||
|onDragExit|DragEventHandler<HTMLDivElement>|null||
|onDragExitCapture|DragEventHandler<HTMLDivElement>|null||
|onDragLeave|DragEventHandler<HTMLDivElement>|null||
|onDragLeaveCapture|DragEventHandler<HTMLDivElement>|null||
|onDragOver|DragEventHandler<HTMLDivElement>|null||
|onDragOverCapture|DragEventHandler<HTMLDivElement>|null||
|onDragStart|DragEventHandler<HTMLDivElement>|null||
|onDragStartCapture|DragEventHandler<HTMLDivElement>|null||
|onDrop|DragEventHandler<HTMLDivElement>|null||
|onDropCapture|DragEventHandler<HTMLDivElement>|null||
|onMouseDown|MouseEventHandler<HTMLDivElement>|null||
|onMouseDownCapture|MouseEventHandler<HTMLDivElement>|null||
|onMouseEnter|MouseEventHandler<HTMLDivElement>|null||
|onMouseLeave|MouseEventHandler<HTMLDivElement>|null||
|onMouseMove|MouseEventHandler<HTMLDivElement>|null||
|onMouseMoveCapture|MouseEventHandler<HTMLDivElement>|null||
|onMouseOut|MouseEventHandler<HTMLDivElement>|null||
|onMouseOutCapture|MouseEventHandler<HTMLDivElement>|null||
|onMouseOver|MouseEventHandler<HTMLDivElement>|null||
|onMouseOverCapture|MouseEventHandler<HTMLDivElement>|null||
|onMouseUp|MouseEventHandler<HTMLDivElement>|null||
|onMouseUpCapture|MouseEventHandler<HTMLDivElement>|null||
|onSelect|ReactEventHandler<HTMLDivElement>|null||
|onSelectCapture|ReactEventHandler<HTMLDivElement>|null||
|onTouchCancel|TouchEventHandler<HTMLDivElement>|null||
|onTouchCancelCapture|TouchEventHandler<HTMLDivElement>|null||
|onTouchEnd|TouchEventHandler<HTMLDivElement>|null||
|onTouchEndCapture|TouchEventHandler<HTMLDivElement>|null||
|onTouchMove|TouchEventHandler<HTMLDivElement>|null||
|onTouchMoveCapture|TouchEventHandler<HTMLDivElement>|null||
|onTouchStart|TouchEventHandler<HTMLDivElement>|null||
|onTouchStartCapture|TouchEventHandler<HTMLDivElement>|null||
|onPointerDown|PointerEventHandler<HTMLDivElement>|null||
|onPointerDownCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerMove|PointerEventHandler<HTMLDivElement>|null||
|onPointerMoveCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerUp|PointerEventHandler<HTMLDivElement>|null||
|onPointerUpCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerCancel|PointerEventHandler<HTMLDivElement>|null||
|onPointerCancelCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerEnter|PointerEventHandler<HTMLDivElement>|null||
|onPointerEnterCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerLeave|PointerEventHandler<HTMLDivElement>|null||
|onPointerLeaveCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerOver|PointerEventHandler<HTMLDivElement>|null||
|onPointerOverCapture|PointerEventHandler<HTMLDivElement>|null||
|onPointerOut|PointerEventHandler<HTMLDivElement>|null||
|onPointerOutCapture|PointerEventHandler<HTMLDivElement>|null||
|onGotPointerCapture|PointerEventHandler<HTMLDivElement>|null||
|onGotPointerCaptureCapture|PointerEventHandler<HTMLDivElement>|null||
|onLostPointerCapture|PointerEventHandler<HTMLDivElement>|null||
|onLostPointerCaptureCapture|PointerEventHandler<HTMLDivElement>|null||
|onScroll|UIEventHandler<HTMLDivElement>|null||
|onScrollCapture|UIEventHandler<HTMLDivElement>|null||
|onWheel|WheelEventHandler<HTMLDivElement>|null||
|onWheelCapture|WheelEventHandler<HTMLDivElement>|null||
|onAnimationStart|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationStartCapture|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationEnd|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationEndCapture|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationIteration|AnimationEventHandler<HTMLDivElement>|null||
|onAnimationIterationCapture|AnimationEventHandler<HTMLDivElement>|null||
|onTransitionEnd|TransitionEventHandler<HTMLDivElement>|null||
|onTransitionEndCapture|TransitionEventHandler<HTMLDivElement>|null||
|ref|Ref<HTMLDivElement>|null||
|isError|boolean|null|errorが発生したかどうか|
|errorMessage|string|null|isError = trueの場合に表示するエラーメッセージ|
|inputProps|Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>> & { ...; }|null|input elementへ渡すprops|

<!-- prettier-ignore-end -->
