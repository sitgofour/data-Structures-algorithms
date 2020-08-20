class GraphStuff:
    def __init__(self):



    def graph_bfs(root):
        queue = []
        result = []

        queue.append(root)

        while len(queue):
            current = queue.pop(0)
            result.append(current.val)

            if current.left: 
                queue.append(current.left)

            if current.right:
                queue.append(current.right)

        return result





    def graph_bfs2(rootNode):
        queue = []
        result = []

        queue.append(rootNode)

        while len(queue):

            current = queue.pop(0)
            result.append(current.val)

            if current.left:
                queue.append(current.left)
            
            if current.right:
                queue.append(current.right)

        return result




def bfs3(node):

    queue = []
    result = []
    levels = 0

    queue.append(node)

    while len(queue):
        levels += 1

        current = queue.pop(0)
        result.append(current)
        
        if current.left:
            queue.append(current.left)

        if current.right:
            queue.append(current.right)


    return result


    graphBfs4(node):

        queue = []
        result = []

        queue.append(node)

        while len(queue):

            current = queue.pop(0)
            result.append(current.val)

            if current.left:
                queue.append(cuurent.left)

            if current.right:
                queue.append(current.right)


        return result



    def graph_BFS_10(root):

        if root is None:
            return root

        result = []
        queue = []

        queue.append(root)

        while len(queue):
            current = queue.pop(0)
            result.append(current.value)

            if current.left:
                queue.append(current.left)

            if current.right:
                queue.append(current.right)

        
        return result