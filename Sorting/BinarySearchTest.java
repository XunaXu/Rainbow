/*
Binary Search: Search an int from an int array
* Contraints:
*	It requires a sorted int array in an ascending order. Using Heap Sort in the HeapSortTest.java
*	It only check whether the int array contains this element or not.
* Output: 
*	True: It means found
*	False: It means not found.
* Complexity: logN
* @ Xuna Xu [78756e61@gmail.com] Feel free to email. Happy Coding!
*/

import java.util.Arrays;

public class BinarySearchTest{
    public static void main(String[] args){

        //case 1: empty array
        test(new int[]{}, 0, false);

        //case 2: one element array
        test(new int[]{2}, 2, true);

        test(new int[]{2}, 4, false);

        //case 3: two element array
        test(new int[]{1,3}, 1, true);

        test(new int[]{1,3}, -1, false);
        
        //case 4: odd number length n>3 array
        test(new int[]{8,-3,17,1,0}, 1, true);

        test(new int[]{8,-3,17,1,0}, 11, false);


        //case 5: even number length n>3 array
        test(new int[]{2,96,1,83,23,1,4,-7}, 2, true);

        test(new int[]{2,96,1,83,23,1,4,-7}, -8, false);

        
        //case 6: an array with duplicates
        test(new int[]{3,3,3,1,5}, 3, true);

        test(new int[]{3,3,3,1,5}, -1, false);
    }

	public static void test(int[] array, int target, boolean expected){
		HeapSortAsc heapSort = new HeapSortAsc(array);
		heapSort.sortAsc();		
		BinarySearch binarySearch = new BinarySearch(array);
		boolean result=binarySearch.search(target);
		System.out.println((result==expected)+": search "+target+" in "+Arrays.toString(array)); 
	}
}



class BinarySearch{
	int[] arr;
	int target;	

	public BinarySearch(int[] arr){
		this.arr=arr;
	}

	public boolean search(int target){
		int length=arr.length;
		return helpMeSearch(0, length-1, target);		
	}

	private boolean helpMeSearch(int begin, int end, int target){
		//reach the end, not found. After searching the last one element, beign will be greater than end no matter to the left or right. 
		if(begin>end){
			return false;
		}	

		//calculate the mid point relative to the original array.
		int mid=((end-begin)/2)+begin;
		
		//found during the search process
		if(arr[mid]==target){
			return true;
		}

		//if a mid point is greater than the target, then search the right side of the array
		if(arr[mid]>target){
			helpMeSearch(mid+1, end, target);
		}

		//if a mid point is less than the target, then search the left side of the array
		if(arr[mid]<target){
			helpMeSearch(begin, mid-1, target);
		}
		
		return false;
	}
}
