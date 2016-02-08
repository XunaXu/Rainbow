/*
* Insertion Sort in an ascending order (an in-place sorting algorithm)
* 1. Using binary search to find the swapping point. (Nlog(N))
* 2. Then pair Swapping costs N^2
* Complexity: N^2
* @ Xuna Xu [78756e61@gmail.com] Feel free to email. Happy Coding!
*/

import java.util.Arrays;

public class InsertionSortTest{
    public static void main(String[] args){

        //case 1: empty array
        test(new int[]{}, new int[]{});

        //case 2: one element array
        test(new int[]{2}, new int[]{2});

        //case 3: two element array
        test(new int[]{1,3}, new int[]{1,3});

        test(new int[]{3,1}, new int[]{1,3});

        
        //case 4: odd number length n>3 array
        test(new int[]{8,-3,17,1,0}, new int[]{-3,0,1,8,17});

        //case 5: even number length n>3 array
        test(new int[]{2,96,1,83,23,1,4,-7}, new int[]{-7,1,1,2,4,23,83,96});
        
        //case 6: an array with duplicates
        test(new int[]{3,3,3,1,5}, new int[]{1,3,3,3,5});
    }

	public static void test(int[] original, int[] expected){
		InsertionSort insertionSort = new InsertionSort(original);
		int[] originalCopy = original.clone();  //not ideal due to the in-place sorting alg
		insertionSort.sortAsc();
		int[] result = original;
		System.out.println(Arrays.equals(expected, result)+" "+Arrays.toString(originalCopy)+" => "+Arrays.toString(result)); 
	}
}

class InsertionSort{
	int[] arr;

	public InsertionSort(int[] arr){
		this.arr= arr;
	}
	
	public void sortAsc(){
		int swappingIndex;
		int temp;
		
		for(int i=1; i<arr.length; i++){
			//get the swapping index
			swappingIndex=search(0,i,arr[i]);
			
			//sorted, do nothing
			if(swappingIndex==-1){
				continue;
			}

			//pair swapping
			for(int j=i; j>swappingIndex; j--){
				temp=arr[j];
				arr[j]=arr[j-1];
				arr[j-1]=temp;
			}
		}
	}

	//search the index of an element that will be swapped with the target, using modified binary search
	public int search(int begin, int end, int target){
		
		if(begin>end){
			return -1;
		}	

		int mid=((end-begin)/2)+begin;

		//If the target is less than the mid point, and the previous element doesn't exsit.		
		//If the target is less than the mid point , and the target is greater than the previous element OR
		//THEN We find the index 
		if(target<=arr[mid]){
			if(mid==0){
				return mid;
			}			
			if((target>=arr[mid-1])){
				return mid;
			}
		}	
		
		//if the target is less than the mid point, then search the left side of the array
		if(target<=arr[mid]){
			return search(begin, mid-1, target);
		}

		//if the target is greater than the mid point, then search the right side of the array
		if(target>arr[mid]){
			return search(mid+1, end, target);
		}

		//should never reach here
		return -999;
	}

}

