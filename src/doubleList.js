function doubleList(){
    let head = null;
    let tail = null
    let Length = 0;
    function Node(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    

    this.append = function(value){
        let node = new Node(value);
        if(!head){
            head = node;
            tail = node;
        }
        else{
            let currentNode = head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            node.prev = currentNode
            currentNode.next = node;
            tail = node;
        }
        Length++;
        return 'ok';
    }
    this.getLength = function(){
        return Length;
    }
    this.showNode = function(){
        let currentNode  = head;
        let arr = [];
        while(currentNode.next){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        arr.push(currentNode.value);
        return arr;
    }
    this.find = function(index){
        
        if(index>-1 && index<Length){
            let currentNode  = head;
            if(index ==0){
                return {
                    '当前节点：':head.value,
                    '后驱节点：':head.next?head.next.value:undefined
                };
            }else{
                let current = 0;
                while(current<index){
                    current++;
                    currentNode = currentNode.next
                }
                return {
                    "前驱节点":currentNode.prev.value,
                    "当前节点":currentNode.value,
                    "后驱节点":currentNode.next?currentNode.next.value:undefined
                }
            }  
        }
        else{
            throw new Error('下标越界了！')
        }
    }
    this.delete = function(index){
        if(index>-1 && index<Length){          //判断index是否越界
            
            let a = Length/2;                  //主要是用来判断index是在那个区域，如果在前半部分，从前往后遍历快一点，如果是在后半部分，从后面往前面遍历更好，速度快
            let currentNode;
            let current;
            if(index<=a){                      //前半部分
                if(index ==0){
                    head = head.next;
                    head.prev = null;
                }else{
                    current=0;
                    currentNode = head;
                    while(current < index){
                        current++;
                        currentNode = currentNode.next
                    }
                    currentNode.next = currentNode.next.next;
                    currentNode.next.next.prev = currentNode;
                }   
            }else if(index>=a){                    //后半部分
                if(index ==Length-1){
                    tail.prev.next =null;
                    tail = tail.prev;
                }
                else{
                    current = Length-1;
                    currentNode = tail;
                    while(current>index){
                        current--;
                        currentNode = currentNode.prev;
                    }
                    let preview =currentNode.prev;
                    let nextNode = currentNode.next;
                    preview.next = nextNode;
                    nextNode.prev = preview;
                }
            }
            Length--;
            return this.showNode();
        }
    }

}