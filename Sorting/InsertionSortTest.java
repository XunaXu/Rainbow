/*
Insertion Sort in an ascending order (an in-place sorting algorithm)
1. Build a max heap from bottom up
2. Sort the array  
3. Using binary search to the insertion point. (log(N))
@ Xuna Xu [78756e61@gmail.com] Feel free to email. Happy Coding!
*/

public class InsertionSortTest{
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
		HeapSortAsc insertionSort = new InsertionSort(original);
		int[] originalCopy = original.clone();  //not ideal due to the in-place sorting alg
		int[] result = heapSort.sortAsc();
		System.out.println(Arrays.equals(expected, result)+" "+Arrays.toString(originalCopy)+" => "+Arrays.toString(result)); 
	}
}

class InsertionSort{
	public InsertionSort(){

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
	}
}
