import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

// 1
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        char[] A, B;
        A = br.readLine().toCharArray();
        B = br.readLine().toCharArray();

        ArrayList<Character> listA = new ArrayList<>();
        for(char c : A){
            listA.add(c);
        }

        ArrayList<Character> listB = new ArrayList<>();
        for(char c : B){
            listB.add(c);
        }


        ArrayList<Character> curListA = new ArrayList<>();
        ArrayList<Character> curListB = new ArrayList<>();


        for(char c : A){
            if(listB.contains(c)){
                curListA.add(c);
            }
        }

        for(char c : B){
            if(listA.contains(c)){
                curListB.add(c);
            }
        }
        int deleteCount = 0;
        deleteCount = deleteCount +  (listA.size() - curListA.size())  + (listB.size() - curListB.size());

        Set<Character> uniqueChars = new HashSet<>(curListA);
        ArrayList<Character> uniqueList = new ArrayList<>(uniqueChars);


        for(char c : uniqueList){
            int countA = Collections.frequency(curListA, c);
            int countB = Collections.frequency(curListB, c);
            deleteCount = deleteCount +  Math.abs(countA - countB);
        }

        System.out.print(deleteCount);
    }
}
