//Heap Sort in an ascending order (an in-place sorting algorithm)
//1. Build a max heap from bottom up
//2. Sort the array  
//@ Xuna Xu [78756e61@gmail.com] Happy Coding!

import java.util.Arrays;

public class HeapSortAscTest{
	
    public static void main(String[] args){

        //case 1: empty array
        test(new int[]{}, new int[]{});

        //case 2: one element array
        test(new int[]{2}, new int[]{2});

        //case 3: two element array
        test(new int[]{1,3}, new int[]{1,3});
        
        //case 4: odd number length n>3 array
        test(new int[]{8,-3,17,1,0}, new int[]{-3,0,1,8,17});

        //case 5: even number length n>3 array
        test(new int[]{2,96,1,83,23,1,4,-7}, new int[]{-7,1,1,2,4,23,83,96});
        
        //case 6: an array with duplicates
        test(new int[]{3,3,3,1,5}, new int[]{1,3,3,3,5});
    }

	public static void test(int[] original, int[] expected){
		HeapSortAsc heapSort = new HeapSortAsc(original);
		int[] originalCopy = original.clone();  //not ideal due to the in-place sorting alg
		int[] result = heapSort.sortAsc();
		System.out.println(Arrays.equals(expected, result)+" "+Arrays.toString(originalCopy)+" => "+Arrays.toString(result)); 
	}
}

class HeapSortAsc{
    private int[] arr;
    
    public HeapSortAsc(int[] arr){
    	this.arr=arr;
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

}
