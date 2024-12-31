import { Node } from '@tiptap/core'

const CustomNode = Node.create({
  name: 'customNode',
// Your code goes here.

  group: 'block',
  content: 'inline*',
  inline: false,
  draggable: true,

  addAttributes() {
    return {
      id: {
        default: null,  
      },
      class: {
        default: 'custom-node',
      },
      customText: {
        default: 'Default text inside custom node',
      },
    }
  },
  parseHTML() {
    return [
      {
        tag: 'div.custom-node', 
      },
    ]
  },
  renderHTML({ node, HTMLAttributes }) {
    return [
      'div', 
      { 
        class: node.attrs.class, 
        id: node.attrs.id 
      },
      node.attrs.customText
    ]
  },
  addCommands() {
    return {
      setCustomNode: (attrs = {}) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs,
        })
      },
    }
  },
  
  addProseMirrorPlugins() {
    return [
    ]
  },
})

export default CustomNode

