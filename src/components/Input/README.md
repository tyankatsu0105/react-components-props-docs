# Input

<!-- start generate props table -->
<!-- このセクションは自動で作成されます。自分で編集しないでください。 -->

## Props

<!-- prettier-ignore-start -->
|Name|Type|Required|Default|Description|
|:-----|:-----|:------|:------|:----------|
|slot|string|false|null||
|style|CSSProperties|false|null||
|title|string|false|null||
|key|Key|false|null||
|defaultChecked|boolean|false|null||
|defaultValue|string \| number \| readonly string[]|false|null||
|suppressContentEditableWarning|boolean|false|null||
|suppressHydrationWarning|boolean|false|null||
|accessKey|string|false|null||
|className|string|false|null||
|contentEditable|Booleanish \| "inherit"|false|null||
|contextMenu|string|false|null||
|dir|string|false|null||
|draggable|Booleanish|false|null||
|hidden|boolean|false|null||
|id|string|false|null||
|lang|string|false|null||
|placeholder|string|false|null||
|spellCheck|Booleanish|false|null||
|tabIndex|number|false|null||
|translate|"yes" \| "no"|false|null||
|radioGroup|string|false|null||
|role|AriaRole|false|null||
|about|string|false|null||
|datatype|string|false|null||
|inlist|any|false|null||
|prefix|string|false|null||
|property|string|false|null||
|resource|string|false|null||
|typeof|string|false|null||
|vocab|string|false|null||
|autoCapitalize|string|false|null||
|autoCorrect|string|false|null||
|autoSave|string|false|null||
|color|string|false|null||
|itemProp|string|false|null||
|itemScope|boolean|false|null||
|itemType|string|false|null||
|itemID|string|false|null||
|itemRef|string|false|null||
|results|number|false|null||
|security|string|false|null||
|unselectable|"on" \| "off"|false|null||
|inputMode|"text" \| "none" \| "search" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal"|false|null|Hints at the type of data that might be entered by the user while editing the element or its contents<br>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute|
|is|string|false|null|Specify that a standard HTML element should behave like a defined custom built-in element<br>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is|
|aria-activedescendant|string|false|null|Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.|
|aria-atomic|Booleanish|false|null|Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.|
|aria-autocomplete|"list" \| "none" \| "inline" \| "both"|false|null|Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br>presented if they are made.|
|aria-busy|Booleanish|false|null|Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.|
|aria-checked|boolean \| "true" \| "false" \| "mixed"|false|null|Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br>@see aria-pressed<br>@see aria-selected.|
|aria-colcount|number|false|null|Defines the total number of columns in a table, grid, or treegrid.<br>@see aria-colindex.|
|aria-colindex|number|false|null|Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br>@see aria-colcount<br>@see aria-colspan.|
|aria-colspan|number|false|null|Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br>@see aria-colindex<br>@see aria-rowspan.|
|aria-controls|string|false|null|Identifies the element (or elements) whose contents or presence are controlled by the current element.<br>@see aria-owns.|
|aria-current|boolean \| "time" \| "true" \| "false" \| "page" \| "step" \| "location" \| "date"|false|null|Indicates the element that represents the current item within a container or set of related elements.|
|aria-describedby|string|false|null|Identifies the element (or elements) that describes the object.<br>@see aria-labelledby|
|aria-details|string|false|null|Identifies the element that provides a detailed, extended description for the object.<br>@see aria-describedby.|
|aria-disabled|Booleanish|false|null|Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br>@see aria-hidden<br>@see aria-readonly.|
|aria-dropeffect|"link" \| "none" \| "copy" \| "execute" \| "move" \| "popup"|false|null|Indicates what functions can be performed when a dragged object is released on the drop target.<br>@deprecated in ARIA 1.1|
|aria-errormessage|string|false|null|Identifies the element that provides an error message for the object.<br>@see aria-invalid<br>@see aria-describedby.|
|aria-expanded|Booleanish|false|null|Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.|
|aria-flowto|string|false|null|Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br>allows assistive technology to override the general default of reading in document source order.|
|aria-grabbed|Booleanish|false|null|Indicates an element's "grabbed" state in a drag-and-drop operation.<br>@deprecated in ARIA 1.1|
|aria-haspopup|boolean \| "dialog" \| "menu" \| "true" \| "false" \| "grid" \| "listbox" \| "tree"|false|null|Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.|
|aria-hidden|Booleanish|false|null|Indicates whether the element is exposed to an accessibility API.<br>@see aria-disabled.|
|aria-invalid|boolean \| "true" \| "false" \| "grammar" \| "spelling"|false|null|Indicates the entered value does not conform to the format expected by the application.<br>@see aria-errormessage.|
|aria-keyshortcuts|string|false|null|Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.|
|aria-label|string|false|null|Defines a string value that labels the current element.<br>@see aria-labelledby.|
|aria-labelledby|string|false|null|Identifies the element (or elements) that labels the current element.<br>@see aria-describedby.|
|aria-level|number|false|null|Defines the hierarchical level of an element within a structure.|
|aria-live|"off" \| "assertive" \| "polite"|false|null|Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.|
|aria-modal|Booleanish|false|null|Indicates whether an element is modal when displayed.|
|aria-multiline|Booleanish|false|null|Indicates whether a text box accepts multiple lines of input or only a single line.|
|aria-multiselectable|Booleanish|false|null|Indicates that the user may select more than one item from the current selectable descendants.|
|aria-orientation|"horizontal" \| "vertical"|false|null|Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.|
|aria-owns|string|false|null|Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br>@see aria-controls.|
|aria-placeholder|string|false|null|Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br>A hint could be a sample value or a brief description of the expected format.|
|aria-posinset|number|false|null|Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br>@see aria-setsize.|
|aria-pressed|boolean \| "true" \| "false" \| "mixed"|false|null|Indicates the current "pressed" state of toggle buttons.<br>@see aria-checked<br>@see aria-selected.|
|aria-readonly|Booleanish|false|null|Indicates that the element is not editable, but is otherwise operable.<br>@see aria-disabled.|
|aria-relevant|"text" \| "additions" \| "additions removals" \| "additions text" \| "all" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals"|false|null|Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br>@see aria-atomic.|
|aria-required|Booleanish|false|null|Indicates that user input is required on the element before a form may be submitted.|
|aria-roledescription|string|false|null|Defines a human-readable, author-localized description for the role of an element.|
|aria-rowcount|number|false|null|Defines the total number of rows in a table, grid, or treegrid.<br>@see aria-rowindex.|
|aria-rowindex|number|false|null|Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br>@see aria-rowcount<br>@see aria-rowspan.|
|aria-rowspan|number|false|null|Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br>@see aria-rowindex<br>@see aria-colspan.|
|aria-selected|Booleanish|false|null|Indicates the current "selected" state of various widgets.<br>@see aria-checked<br>@see aria-pressed.|
|aria-setsize|number|false|null|Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br>@see aria-posinset.|
|aria-sort|"none" \| "ascending" \| "descending" \| "other"|false|null|Indicates if items in a table or grid are sorted in ascending or descending order.|
|aria-valuemax|number|false|null|Defines the maximum allowed value for a range widget.|
|aria-valuemin|number|false|null|Defines the minimum allowed value for a range widget.|
|aria-valuenow|number|false|null|Defines the current value for a range widget.<br>@see aria-valuetext.|
|aria-valuetext|string|false|null|Defines the human readable text alternative of aria-valuenow for a range widget.|
|dangerouslySetInnerHTML|{ __html: string; }|false|null||
|onCopy|ClipboardEventHandler<HTMLDivElement>|false|null||
|onCopyCapture|ClipboardEventHandler<HTMLDivElement>|false|null||
|onCut|ClipboardEventHandler<HTMLDivElement>|false|null||
|onCutCapture|ClipboardEventHandler<HTMLDivElement>|false|null||
|onPaste|ClipboardEventHandler<HTMLDivElement>|false|null||
|onPasteCapture|ClipboardEventHandler<HTMLDivElement>|false|null||
|onCompositionEnd|CompositionEventHandler<HTMLDivElement>|false|null||
|onCompositionEndCapture|CompositionEventHandler<HTMLDivElement>|false|null||
|onCompositionStart|CompositionEventHandler<HTMLDivElement>|false|null||
|onCompositionStartCapture|CompositionEventHandler<HTMLDivElement>|false|null||
|onCompositionUpdate|CompositionEventHandler<HTMLDivElement>|false|null||
|onCompositionUpdateCapture|CompositionEventHandler<HTMLDivElement>|false|null||
|onFocus|FocusEventHandler<HTMLDivElement>|false|null||
|onFocusCapture|FocusEventHandler<HTMLDivElement>|false|null||
|onBlur|FocusEventHandler<HTMLDivElement>|false|null||
|onBlurCapture|FocusEventHandler<HTMLDivElement>|false|null||
|onChange|FormEventHandler<HTMLDivElement>|false|null||
|onChangeCapture|FormEventHandler<HTMLDivElement>|false|null||
|onBeforeInput|FormEventHandler<HTMLDivElement>|false|null||
|onBeforeInputCapture|FormEventHandler<HTMLDivElement>|false|null||
|onInput|FormEventHandler<HTMLDivElement>|false|null||
|onInputCapture|FormEventHandler<HTMLDivElement>|false|null||
|onReset|FormEventHandler<HTMLDivElement>|false|null||
|onResetCapture|FormEventHandler<HTMLDivElement>|false|null||
|onSubmit|FormEventHandler<HTMLDivElement>|false|null||
|onSubmitCapture|FormEventHandler<HTMLDivElement>|false|null||
|onInvalid|FormEventHandler<HTMLDivElement>|false|null||
|onInvalidCapture|FormEventHandler<HTMLDivElement>|false|null||
|onLoad|ReactEventHandler<HTMLDivElement>|false|null||
|onLoadCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onError|ReactEventHandler<HTMLDivElement>|false|null||
|onErrorCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onKeyDown|KeyboardEventHandler<HTMLDivElement>|false|null||
|onKeyDownCapture|KeyboardEventHandler<HTMLDivElement>|false|null||
|onKeyPress|KeyboardEventHandler<HTMLDivElement>|false|null|@deprecated|
|onKeyPressCapture|KeyboardEventHandler<HTMLDivElement>|false|null|@deprecated|
|onKeyUp|KeyboardEventHandler<HTMLDivElement>|false|null||
|onKeyUpCapture|KeyboardEventHandler<HTMLDivElement>|false|null||
|onAbort|ReactEventHandler<HTMLDivElement>|false|null||
|onAbortCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onCanPlay|ReactEventHandler<HTMLDivElement>|false|null||
|onCanPlayCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onCanPlayThrough|ReactEventHandler<HTMLDivElement>|false|null||
|onCanPlayThroughCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onDurationChange|ReactEventHandler<HTMLDivElement>|false|null||
|onDurationChangeCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onEmptied|ReactEventHandler<HTMLDivElement>|false|null||
|onEmptiedCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onEncrypted|ReactEventHandler<HTMLDivElement>|false|null||
|onEncryptedCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onEnded|ReactEventHandler<HTMLDivElement>|false|null||
|onEndedCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onLoadedData|ReactEventHandler<HTMLDivElement>|false|null||
|onLoadedDataCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onLoadedMetadata|ReactEventHandler<HTMLDivElement>|false|null||
|onLoadedMetadataCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onLoadStart|ReactEventHandler<HTMLDivElement>|false|null||
|onLoadStartCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onPause|ReactEventHandler<HTMLDivElement>|false|null||
|onPauseCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onPlay|ReactEventHandler<HTMLDivElement>|false|null||
|onPlayCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onPlaying|ReactEventHandler<HTMLDivElement>|false|null||
|onPlayingCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onProgress|ReactEventHandler<HTMLDivElement>|false|null||
|onProgressCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onRateChange|ReactEventHandler<HTMLDivElement>|false|null||
|onRateChangeCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onSeeked|ReactEventHandler<HTMLDivElement>|false|null||
|onSeekedCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onSeeking|ReactEventHandler<HTMLDivElement>|false|null||
|onSeekingCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onStalled|ReactEventHandler<HTMLDivElement>|false|null||
|onStalledCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onSuspend|ReactEventHandler<HTMLDivElement>|false|null||
|onSuspendCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onTimeUpdate|ReactEventHandler<HTMLDivElement>|false|null||
|onTimeUpdateCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onVolumeChange|ReactEventHandler<HTMLDivElement>|false|null||
|onVolumeChangeCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onWaiting|ReactEventHandler<HTMLDivElement>|false|null||
|onWaitingCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onAuxClick|MouseEventHandler<HTMLDivElement>|false|null||
|onAuxClickCapture|MouseEventHandler<HTMLDivElement>|false|null||
|onClick|MouseEventHandler<HTMLDivElement>|false|null||
|onClickCapture|MouseEventHandler<HTMLDivElement>|false|null||
|onContextMenu|MouseEventHandler<HTMLDivElement>|false|null||
|onContextMenuCapture|MouseEventHandler<HTMLDivElement>|false|null||
|onDoubleClick|MouseEventHandler<HTMLDivElement>|false|null||
|onDoubleClickCapture|MouseEventHandler<HTMLDivElement>|false|null||
|onDrag|DragEventHandler<HTMLDivElement>|false|null||
|onDragCapture|DragEventHandler<HTMLDivElement>|false|null||
|onDragEnd|DragEventHandler<HTMLDivElement>|false|null||
|onDragEndCapture|DragEventHandler<HTMLDivElement>|false|null||
|onDragEnter|DragEventHandler<HTMLDivElement>|false|null||
|onDragEnterCapture|DragEventHandler<HTMLDivElement>|false|null||
|onDragExit|DragEventHandler<HTMLDivElement>|false|null||
|onDragExitCapture|DragEventHandler<HTMLDivElement>|false|null||
|onDragLeave|DragEventHandler<HTMLDivElement>|false|null||
|onDragLeaveCapture|DragEventHandler<HTMLDivElement>|false|null||
|onDragOver|DragEventHandler<HTMLDivElement>|false|null||
|onDragOverCapture|DragEventHandler<HTMLDivElement>|false|null||
|onDragStart|DragEventHandler<HTMLDivElement>|false|null||
|onDragStartCapture|DragEventHandler<HTMLDivElement>|false|null||
|onDrop|DragEventHandler<HTMLDivElement>|false|null||
|onDropCapture|DragEventHandler<HTMLDivElement>|false|null||
|onMouseDown|MouseEventHandler<HTMLDivElement>|false|null||
|onMouseDownCapture|MouseEventHandler<HTMLDivElement>|false|null||
|onMouseEnter|MouseEventHandler<HTMLDivElement>|false|null||
|onMouseLeave|MouseEventHandler<HTMLDivElement>|false|null||
|onMouseMove|MouseEventHandler<HTMLDivElement>|false|null||
|onMouseMoveCapture|MouseEventHandler<HTMLDivElement>|false|null||
|onMouseOut|MouseEventHandler<HTMLDivElement>|false|null||
|onMouseOutCapture|MouseEventHandler<HTMLDivElement>|false|null||
|onMouseOver|MouseEventHandler<HTMLDivElement>|false|null||
|onMouseOverCapture|MouseEventHandler<HTMLDivElement>|false|null||
|onMouseUp|MouseEventHandler<HTMLDivElement>|false|null||
|onMouseUpCapture|MouseEventHandler<HTMLDivElement>|false|null||
|onSelect|ReactEventHandler<HTMLDivElement>|false|null||
|onSelectCapture|ReactEventHandler<HTMLDivElement>|false|null||
|onTouchCancel|TouchEventHandler<HTMLDivElement>|false|null||
|onTouchCancelCapture|TouchEventHandler<HTMLDivElement>|false|null||
|onTouchEnd|TouchEventHandler<HTMLDivElement>|false|null||
|onTouchEndCapture|TouchEventHandler<HTMLDivElement>|false|null||
|onTouchMove|TouchEventHandler<HTMLDivElement>|false|null||
|onTouchMoveCapture|TouchEventHandler<HTMLDivElement>|false|null||
|onTouchStart|TouchEventHandler<HTMLDivElement>|false|null||
|onTouchStartCapture|TouchEventHandler<HTMLDivElement>|false|null||
|onPointerDown|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerDownCapture|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerMove|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerMoveCapture|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerUp|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerUpCapture|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerCancel|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerCancelCapture|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerEnter|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerEnterCapture|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerLeave|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerLeaveCapture|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerOver|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerOverCapture|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerOut|PointerEventHandler<HTMLDivElement>|false|null||
|onPointerOutCapture|PointerEventHandler<HTMLDivElement>|false|null||
|onGotPointerCapture|PointerEventHandler<HTMLDivElement>|false|null||
|onGotPointerCaptureCapture|PointerEventHandler<HTMLDivElement>|false|null||
|onLostPointerCapture|PointerEventHandler<HTMLDivElement>|false|null||
|onLostPointerCaptureCapture|PointerEventHandler<HTMLDivElement>|false|null||
|onScroll|UIEventHandler<HTMLDivElement>|false|null||
|onScrollCapture|UIEventHandler<HTMLDivElement>|false|null||
|onWheel|WheelEventHandler<HTMLDivElement>|false|null||
|onWheelCapture|WheelEventHandler<HTMLDivElement>|false|null||
|onAnimationStart|AnimationEventHandler<HTMLDivElement>|false|null||
|onAnimationStartCapture|AnimationEventHandler<HTMLDivElement>|false|null||
|onAnimationEnd|AnimationEventHandler<HTMLDivElement>|false|null||
|onAnimationEndCapture|AnimationEventHandler<HTMLDivElement>|false|null||
|onAnimationIteration|AnimationEventHandler<HTMLDivElement>|false|null||
|onAnimationIterationCapture|AnimationEventHandler<HTMLDivElement>|false|null||
|onTransitionEnd|TransitionEventHandler<HTMLDivElement>|false|null||
|onTransitionEndCapture|TransitionEventHandler<HTMLDivElement>|false|null||
|ref|Ref<HTMLDivElement>|false|null||
|isError|boolean|false|null|errorが発生したかどうか|
|errorMessage|string|false|null|isError = trueの場合に表示するエラーメッセージ|
|inputProps|Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" \| keyof InputHTMLAttributes<...>> & { ...; }|false|null|input elementへ渡すprops|
<!-- prettier-ignore-end -->

<!-- end generate props table -->
