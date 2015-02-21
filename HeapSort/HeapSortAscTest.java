//Heap Sort in an ascending order ( an in-place sorting algorithm)
//1. Build a max heap from bottom up
//2. Sort the array  
//@ Xuna Xu [78756e61@gmail.com]

import java.util.Arrays;

public class HeapSortAscTest{
    public static void main(String[] args){
        //case 1: empty array
        int[] arr1 = {};
        HeapSortAsc heapSort1 = new HeapSortAsc(arr1);
        System.out.println(Arrays.toString(heapSort1.sortAsc()));
        
        //case 2: one element array
        int[] arr2 = {1};
        HeapSortAsc heapSort2 = new HeapSortAsc(arr2);
        System.out.println(Arrays.toString(heapSort2.sortAsc()));
        
        //case 3: two element array
        int[] arr3 = {1,3};
        HeapSortAsc heapSort3 = new HeapSortAsc(arr3);
        System.out.println(Arrays.toString(heapSort3.sortAsc()));
        
        //case 4: odd number length n>3 array
        int[] arr4 = {8,-3,17,1,0};
        HeapSortAsc heapSort4 = new HeapSortAsc(arr4);
        System.out.println(Arrays.toString(heapSort4.sortAsc()));
        
        //case 5: even number length n>3 array
        int[] arr5 = {2,96,1,83,23,1,4,-7};
        HeapSortAsc heapSort5 = new HeapSortAsc(arr5);
        System.out.println(Arrays.toString(heapSort5.sortAsc()));
        
        //case 6: an array with duplicates
        int[] arr6 = {3,3,3,1,5};
        HeapSortAsc heapSort6 = new HeapSortAsc(arr6);
        System.out.println(Arrays.toString(heapSort6.sortAsc()));
    }
}

class HeapSortAsc{
    private int[] arr;
    
    //constructor
    public HeapSortAsc(int[] arr){
        this.arr = arr;
    }
    
    //build the max heap tree Sol1 : check all leaves's parents. (a bottom up approach)
	//parents n/2, 2..n are leaves of a node.
	//O(N) complexity
	public void buildMaxHeap_Sol1(int length){
		int leaf=0;
		int parent=0;
		int temp=0;

        for(int i = length-1; i>0; i--){
            leaf = arr[i];
            parent = arr[i/2];
            if(leaf > parent){
                temp=arr[i];
                arr[i]=arr[i/2];
                arr[i/2]=temp;
            }
        }
    }

    //build the max heap tree Sol2:  checking all parents' children. ( a mid-up approach)
	//2n+1...n are leaves of current tree, parents n/2,  leftChild 2i, rightChild 2i+1
	//O(N) complexity
	public void buildMaxHeap_Sol2(int length){
		int parent=0;
		int leftChild=0;
		int rightChild=0;
		int temp=0;

        for(int i = length/2 ; i>0; i--){

			if(i*2-1<length){
				parent = arr[i-1];
				leftChild = arr[i*2-1];
			    if(leftChild > parent){
					temp=arr[i-1];
					arr[i-1]=arr[i*2-1];
					arr[i*2-1]=temp;
				}
			}
			
			if(i*2<length){
				parent = arr[i-1];
				rightChild = arr[i*2];
				if(rightChild > parent){
					temp=arr[i-1];
					arr[i-1]=arr[i*2];
					arr[i*2]=temp;
				}
			}
        }
    }

    
    //heap sort in an ascending order
	//swap the first element to the last leaf
	//run build max heap again, till everything is sorted
	//O(NLogN) complexity
    public int[] sortAsc(){
		int temp=0;
		for(int i=arr.length; i>0; i--){
			//buildMaxHeap_Sol1(i); 
			buildMaxHeap_Sol2(i);

			temp=arr[0];
			arr[0]=arr[i-1];
			arr[i-1]=temp;
		}		
		return arr;
    }
}
