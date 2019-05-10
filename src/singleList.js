function Node(value){
    this.value = value;
    this.next = null; 
}
function List(){
    
    let head = null;         
    let Length = 0;

    this.append = function(value){
        let currentNode;
        let node = new Node(value);
        if(head ===null){
            head = node;
            Length++;
        }else{
            currentNode = head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
            Length++;
        }
        return 'ok';
    }
    this.getLength = function(){
        return Length;
    }
    this.showNode = function(){
        let arr = [];
        let currentNode = head;
        while(currentNode.next!=null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        arr.push(currentNode.value);
        return arr;
    }
    this.delete = function(index){
        let currentNode;
        currentNode = head;
        if(index>-1 && index <Length){
            if(index == 0){
                head = currentNode.next;
                
            }
            else{
                let current = 0;
                while(current<index-1){
                    currentNode = currentNode.next
                    current++;
                }
                currentNode.next = currentNode.next.next;
            }
            Length--;
            return this.showNode();


        }
        else{
            throw new Error('index超过链表的长度啦！！！')
        }
    }
    this.find = function(index){
        let currentNode = head;
        if(index>-1 && index <Length){
            if(index ==0){
                return head.value;
            }
            else{
                let current =0
                while(current<index){
                    currentNode = currentNode.next;
                    current++;
                }
                return {"当前节点数据为":currentNode.value};
            }
        }
    }
}

