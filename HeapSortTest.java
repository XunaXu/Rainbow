//Heap Sort
//1. Build a max heap from bottom up
//2. Sort the array

public class HeapSortTest{
    public static void main(String[] args){
        //case 1: empty array
        int[] arr1 = {};
        HeapSortImpl heapSort1 = new HeapSortImpl(arr1);
        System.out.println(heapSort1.sort());
        
        //case 2: one element array
        int[] arr2 = {1};
        HeapSortImpl heapSort2 = new HeapSortImpl(arr2);
        System.out.println(heapSort2.sort());
        
        //case 3: two element array
        int[] arr3 = {1,3};
        HeapSortImpl heapSort3 = new HeapSortImpl(arr3);
        System.out.println(heapSort3.sort());
        
        //case 4: odd number length n>3 array
        int[] arr4 = {8,-3,7,1,0};
        HeapSortImpl heapSort4 = new HeapSortImpl(arr4);
        System.out.println(heapSort4.sort());
        
        //case 5: even number length n>3 array
        int[] arr5 = {92,6,1,3,23,1,4,-7};
        HeapSortImpl heapSort5 = new HeapSortImpl(arr5);
        System.out.println(heapSort5.sort());
        
        //case 6: an array with duplicated elements
        int[] arr6 = {3,3,3,1,0};
        HeapSortImpl heapSort6 = new HeapSortImpl(arr6);
        System.out.println(heapSort6.sort());
    }
}

class HeapSortImpl{
    private int[] arr;
    
    //constructor
    public HeapSortImpl(int[] arr){
        this.arr = arr;
    }
    
    //build the max heap tree
    public void buildMaxHeap(){
        for(int i = arr.length-1; i>0; i--){
            int leaf = arr[i];
            int parent = arr[i/2];
            if(leaf > parent){
                int temp=leaf;
                leaf=parent;
                parent=leaf;
            }
        }
    }
    
    //heap sort
    public int[] sort(){
        this.buildMaxHeap();
    }
}

