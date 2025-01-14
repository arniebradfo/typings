/**
 * [commands on Adobe.io](https://www.adobe.io/xd/uxp/develop/reference/commands/)
 *
 * You can make structural changes to the scenegraph, and perform other complex operations, by programmatically invoking the same commands as XD users have access to in the UI. Because structural changes have many nuanced rules and behaviors in XD, these calls function more like automating the UI than like low-level APIs.
 *
 * For example, these methods do not take arguments. Instead, set the selection to the objects you want the command to target, then invoke the command. Commands may also change the selection when run - for example, group() selects the newly created Group node.
 */
declare module 'commands' {
    /**
     * Wraps the selected objects in a Group, leaving the Group selected afterward. Equivalent to Object > Group in the UI.
     */
    export function group(): void;

    /**
     * Ungroups any of the selected objects that are ungroupable containers (Group, SymbolInstance, RepeatGrid, etc.). Equivalent to _Object > Ungroup_.
     */
    export function ungroup(): void;

    /**
     * Creates a masked Group from the selected objects, using the object that is highest in the z order as the mask shape. The mask shape must be a leaf node or Boolean Group. Equivalent to Object > Mask With Shape.
     */
    export function createMaskGroup(): void;

    /**
     * Converts each selected object to a Path with the exact same visual appearance. Only applies to leaf nodes and Boolean Groups. Equivalent to Object > Path > Convert to Path.
     */
    export function convertToPath(): void;

    /**
     * Converts each selected object's stroke to a Path with the exact same visual appearance. Only applies to leaf nodes, Groups and Boolean Groups. Equivalent to Object > Path > Outline Stroke.

     */
    export function outlineStroke(): void;

    /**
     * Duplicates all selected objects, leaving the duplicates selected afterward.
     *
     * - If the objects are artboards, the duplicates are positioned to not overlap any more artboards, and are placed at the top of the artboard z order.
     * - If normal objects, each duplicate is in the exact same position as the original, and just above it in the z order (duplicates of a multiple selection will not be contiguous in the z order if the originals were not).
     *
     * Edit > Duplicate
     */
    export function duplicate(): void;

    /**
     * Brings selected objects to the front of the z order. Equivalent to Object > Arrange > Bring to Front.
     */
    export function bringToFront(): void;

    /**
     * Brings each selected object one step closer to the front of the z order. Equivalent to Object > Arrange > Bring Forward.
     */
    export function bringForward(): void;

    /**
     * Sends selected objects to the back of the z order. Equivalent to Object > Arrange > Send to Back.
     */
    export function sendToBack(): void;

    /**
     * Sends each selected object one step closer to the back of the z order. Equivalent to Object > Arrange > Send Backward.
     */
    export function sendBackward(): void;

    /**
     * Aligns all selected objects flush left. Equivalent to Object > Align > Left.
     */
    export function alignLeft(): void;

    /**
     * Aligns all selected objects flush right. Equivalent to Object > Align > Right.
     */
    export function alignRight(): void;

    /**
     * Aligns all selected objects along their horizontal centerlines. Equivalent to Object > Align > Center (Horizontally).
     */
    export function alignHorizontalCenter(): void;

    /**
     * Aligns all selected objects flush top. Equivalent to Object > Align > Top.
     */
    export function alignTop(): void;

    /**
     * Aligns all selected objects flush bottom. Equivalent to Object > Align > Bottom.
     */
    export function alignBottom(): void;

    /**
     * Aligns all selected objects along their vertical centerlines. Equivalent to Object > Align > Center (Vertically).
     */
    export function alignVerticalCenter(): void;

    /**
     * Distributes all selected objects evenly along the X axis. Equivalent to Object > Distribute > Horizontally.
     */
    export function distributeHorizontal(): void;

    /**
     * Distributes all selected objects evenly along the Y axis. Equivalent to Object > Distribute > Vertically.
     */
    export function distributeVertical(): void;

    /**
     * Shifts all selected objects and their content so they align crisply with the pixel grid. Equivalent to Object > Align to Pixel Grid.
     */
    export function alignToPixelGrid(): void;

    /**
     * Flips the object horizontally. Some objects such as Symbols cannot be flipped. Equivalent to Object > Flip > Horizontally.
     */
    // function flipHorizontal(): void;

    /**
     * Flips the object vertically. Some objects such as Symbols cannot be flipped. Equivalent to Object > Flip > Vertically.
     */
    // function flipVertical(): void;

    /**
     * Makes a stack background. Equivalent to Object > Make Background, which is available when selecting a single SceneNode that simultaneously meets the following conditions:
     * - is a stack cell
     * - is a valid background candidate
     * - belongs to a Stack that has no background
     * - the Stack contains at least two stack cells
     */
    export function makeBackground(): void;

    /**
     * Replaces a stack background. Equivalent to Object > Replace Background, which is available when selecting a single SceneNode that simultaneously meets the following conditions:
     * - is a stack cell
     * - is a valid background candidate
     * - belongs to a Stack that has no background
     * - the Stack contains at least two stack cells
     */
    export function replaceBackground(): void;


    /**
     * Resets the 3D properties (X rotation, Y rotation, Z position) of selected objects (but not their content) to 0. Equivalent to Object > Transform > Reset 3D Transforms.
     * @since XD 47
     */
    export function reset3DTransforms(): void;
    
}
