/*
TopCoder Problem Archive - String Manipulation - Decipherability Easy
http://community.topcoder.com/stat?c=problem_statement&pm=13658&rd=16313
@Xuna Xu [78756e61@gmail.com]  Feel free to email. Happy Coding!
*/

public class DecipherabilityEasyTest{
	public static void main(String[] args){
		test("sunuke","snuke","Possible");
		test("snuke","skue","Impossible");	
		test("snuke","snuke","Impossible");	
		test("snukent","snuke","Impossible");	
		test("aaaaa","aaaa","Possible");	
		test("aaaaa","aaa","Impossible");	
		test("topcoder","tpcoder","Possible");	
		test("singleroundmatch","singeroundmatc","Impossible");	
		test("acb","abc", "Impossible");
		test("acb","ac", "Possible");
}

	public static void test(String s, String t, String expected){
		DecipherabilityEasy Decipher = new DecipherabilityEasy();	
		String result=Decipher.check(s, t);
		System.out.println((result==expected)+" : "+s+" => "+t+" = "+result);
	}
}


class DecipherabilityEasy{
			
	/*
	Only check when two strings with one element length difference, the rest are automatically impossible
	Compare all elements in s and t. Go through each element in s, compare it with the one in t. 
	Only move to the next element in t if they are equal. 
	If we get the bottom of string t, then it is valid. The rest are not.
	*/
	public String check(String s, String t){
		int slength = s.length();
		int tlength = t.length();
		int sindex=0;
		int tindex=0;

		if(slength==tlength+1){
			for(sindex=0; sindex<slength; sindex++){
				if(t.charAt(tindex)==s.charAt(sindex)){
					tindex++;
				}
				if(tindex==tlength-1){
					return "Possible";
				}
			}
		}
		return "Impossible";
	}
}
