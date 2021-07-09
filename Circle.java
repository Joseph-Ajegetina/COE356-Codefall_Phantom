package Work2;

import java.util.Scanner;

public class Circle {
    public static float Area(float r ) {
        final float PI = 3.142F;
        return r*r*PI;
    }

    public static void main(String[] args) {
        System.out.println("Please Enter a value ");
        Scanner scanner = new Scanner(System.in);
        String radius = scanner.nextLine();
        float rad = Integer.parseInt(radius);
        float AreaCircle = Area(rad);

        System.out.println("Area of the Circle is "+ AreaCircle);
    }
}
