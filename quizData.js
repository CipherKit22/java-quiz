const quizData = {
    'java-quiz': {
        title: 'Java Quiz',
        description: 'Comprehensive Java Programming Quiz',
        questions: [
            {
                id: 1,
                question: "A computer directly understands Machine language without translation.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 2,
                question: "Assembly language differs from high-level languages because it is close to machine language and requires an assembler.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 3,
                question: "Encapsulation is a feature of object-oriented programming.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 4,
                question: "In object-oriented programming, a class is a blueprint for objects.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 5,
                question: "C++/ Assembly/ Machine/ Binary language is considered high-level.",
                options: ["True", "False"],
                correct: 1
            },
            {
                id: 6,
                question: "A programming language translator that converts high-level code into machine code is called a compiler.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 7,
                question: "Javac component of the Java Development Kit (JDK) compiles Java source code.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 8,
                question: "JVM stands for Java Virtual Machine.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 9,
                question: "Junit frameworks are commonly used for unit testing in Java.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 10,
                question: "Java is an example of software technology used in software development.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 11,
                question: "Which of the following printf statements correctly prints the integer value of x?",
                options: [
                    "printf(\"x\");",
                    "printf(\"%d\", x);",
                    "printf(x);",
                    "printf(\"%f\", x);"
                ],
                correct: 1
            },
            {
                id: 12,
                question: "Which type of memory is volatile and loses its content when the computer is turned off?",
                options: [
                    "ROM",
                    "RAM",
                    "Cache",
                    "Hard Disk"
                ],
                correct: 1
            },
            {
                id: 15,
                question: "(!=) The relational operator checks if two values are not equal.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 16,
                question: "(%f) format specifier is used to print a floating-point number.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 17,
                question: "Insert tab space is the purpose of the escape sequence \\t.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 18,
                question: "Which statement will print the value of the integer variable num on the same line as the text \"Value\"?",
                options: [
                    "printf(\"Value\", num);",
                    "printf(\"Value %d\", num);",
                    "printf(\"%d Value\", num);",
                    "printf(\"%s %d\", num);"
                ],
                correct: 1
            },
            {
                id: 19,
                question: "Which of the following is correct to declare two integer variables x and y?",
                options: [
                    "int x y;",
                    "int x, y;",
                    "int x; int y;",
                    "Both B and C"
                ],
                correct: 3
            },
            {
                id: 20,
                question: "The location where a variable is stored is called a memory address.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 21,
                question: "What is the result of:\nint x = 10;\nx++;\nprintf(\"%d\", x);",
                options: [
                    "9",
                    "10",
                    "11",
                    "12"
                ],
                correct: 2
            },
            {
                id: 22,
                question: "The class keyword is used to define a class in Java.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 23,
                question: "How do you create an object of class Car?",
                options: [
                    "Car c;",
                    "Car c = new Car();",
                    "Car = new c();",
                    "new Car;"
                ],
                correct: 1
            },
            {
                id: 24,
                question: "Which of the following calls a method drive() of object c?",
                options: [
                    "drive(c);",
                    "c.drive();",
                    "c->drive();",
                    "Car.drive(c);"
                ],
                correct: 1
            },
            {
                id: 25,
                question: "A class can contain:",
                options: [
                    "Only methods",
                    "Only variables",
                    "Both variables and methods",
                    "None of the above"
                ],
                correct: 2
            },
            {
                id: 26,
                question: "Which of the following correctly declares a method with an integer parameter?",
                options: [
                    "void setNumber(int num)",
                    "int setNumber()",
                    "void setNumber()",
                    "void setNumber(num int)"
                ],
                correct: 0
            },
            {
                id: 27,
                question: "Which method is used to retrieve the value of an instance variable?",
                options: [
                    "set method",
                    "get method",
                    "print method",
                    "main method"
                ],
                correct: 1
            },
            {
                id: 28,
                question: "Which method is used to modify an instance variable?",
                options: [
                    "get method",
                    "set method",
                    "display method",
                    "main method"
                ],
                correct: 1
            },
            {
                id: 29,
                question: "Which of the following has default value 0?",
                options: [
                    "int",
                    "String",
                    "Array",
                    "Object"
                ],
                correct: 0
            },
            {
                id: 30,
                question: "Which is correct syntax for a constructor in Java?",
                options: [
                    "void Car() {}",
                    "Car() {}",
                    "int Car() {}",
                    "public void Car() {}"
                ],
                correct: 1
            },
            {
                id: 31,
                question: "A constructor without parameters is called the default constructor.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 32,
                question: "Can a class have multiple constructors?",
                options: [
                    "No",
                    "Yes, with different parameters",
                    "Only one",
                    "Only if static"
                ],
                correct: 1
            },
            {
                id: 33,
                question: "Using the class name with the new keyword is called a constructor.",
                options: ["True", "False"],
                correct: 1
            },
            {
                id: 34,
                question: "Which of the following is a floating-point type in Java?",
                options: [
                    "int",
                    "double",
                    "char",
                    "boolean"
                ],
                correct: 1
            },
            {
                id: 35,
                question: "A step-by-step solution to a problem is called an algorithm.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 36,
                question: "Algorithms can be represented using pseudocode or flowcharts.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 37,
                question: "Which is a correct pseudocode statement for inputting a number?",
                options: [
                    "input number",
                    "scanf(\"%d\", number)",
                    "cin >> number",
                    "read(number)"
                ],
                correct: 0
            },
            {
                id: 38,
                question: "Which of the following is NOT a control structure?",
                options: [
                    "Sequence",
                    "Selection",
                    "Repetition",
                    "Variable"
                ],
                correct: 3
            },
            {
                id: 39,
                question: "Which of the following is valid?",
                options: [
                    "if (x > 5) x = 10;",
                    "if x > 5 then x = 10;",
                    "if (x > 5) then x = 10;",
                    "if x > 5: x = 10;"
                ],
                correct: 0
            },
            {
                id: 40,
                question: "Which statement is correct?",
                options: [
                    "if (x > 0) print(\"Positive\"); else print(\"Non-positive\");",
                    "if (x > 0) print(\"Positive\"); print(\"Non-positive\"); else;",
                    "if x > 0 then print(\"Positive\") else print(\"Non-positive\")",
                    "if x > 0: print(\"Positive\"); else: print(\"Non-positive\")"
                ],
                correct: 0
            },
            {
                id: 41,
                question: "While loop is commonly used for counter-controlled repetition.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 42,
                question: "Math class provides mathematical methods such as sqrt() and pow().",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 43,
                question: "Static keyword is used to declare a class variable.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 44,
                question: "Math class belongs to java.lang package.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 45,
                question: "In Java programming, static keyword is used when declaring a variable that belongs to the class itself rather than to any specific object created from that class.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 46,
                question: "In Java, Math class provides commonly used mathematical operations such as square root, power calculation, and absolute value functions.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 47,
                question: "When defining a method that accepts more than one parameter, how should the parameters be separated inside the parentheses according to Java syntax rules?",
                options: [
                    "By semicolons",
                    "By commas",
                    "By spaces",
                    "By dots"
                ],
                correct: 1
            },
            {
                id: 50,
                question: "When passing multiple arguments to a method, a compile-time error will occur if the data types of the arguments do not match the method’s parameter list.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 51,
                question: "In a method declaration, where does the return type appear in relation to the method name and parameter list?",
                options: [
                    "After the method name",
                    "Before the method name",
                    "Inside the parentheses",
                    "At the end"
                ],
                correct: 1
            },
            {
                id: 52,
                question: "If two methods have the same name and the same parameter types but different return types, what will happen during compilation?",
                options: [
                    "It will compile successfully",
                    "A compile-time error occurs",
                    "A runtime error occurs",
                    "The program will run without issues"
                ],
                correct: 1
            },
            {
                id: 53,
                question: "Which situation represents a correct example of method overloading in a Java class?",
                options: [
                    "Same name, same parameters",
                    "Same name, different parameters",
                    "Different name, same parameters",
                    "Different name, different parameters"
                ],
                correct: 1
            },
            {
                id: 54,
                question: "The method-call stack follows which data structure principle when managing method calls in Java programs?",
                options: [
                    "FIFO",
                    "LIFO",
                    "Queue",
                    "Stack"
                ],
                correct: 1
            },
            {
                id: 55,
                question: "Which keyword is used to force type conversion in Java?",
                options: [
                    "convert",
                    "cast",
                    "(type)",
                    "change"
                ],
                correct: 2
            },
            {
                id: 56,
                question: "The Java API provides a large collection of prewritten classes and interfaces that programmers can reuse in their programs; API stands for Application Programming Interface.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 57,
                question: "The Scanner class, which is commonly used for user input, belongs to which package?",
                options: [
                    "java.io",
                    "java.util",
                    "java.lang",
                    "java.net"
                ],
                correct: 1
            },
            {
                id: 58,
                question: "Why are packages used in the Java programming language?",
                options: [
                    "To increase errors",
                    "To organize related classes and interfaces",
                    "To reduce execution speed",
                    "To avoid compilation"
                ],
                correct: 1
            },
            {
                id: 59,
                question: "Random class is used for generating random numbers in Java applications.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 60,
                question: "The nextInt() method is commonly used to generate a random integer within a specific range.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 61,
                question: "Random-number generation is widely used in which type of applications?",
                options: [
                    "Text editors only",
                    "Games and simulations",
                    "Compilers",
                    "Operating systems only"
                ],
                correct: 1
            },
            {
                id: 62,
                question: "In Java, an enumeration (enum) is a special data type that defines a fixed set of constants; which keyword is used to declare it?",
                options: [
                    "final",
                    "static",
                    "enum",
                    "const"
                ],
                correct: 2
            },
            {
                id: 63,
                question: "Instance variables are accessible only inside their classes.",
                options: ["True", "False"],
                correct: 1
            },
            {
                id: 64,
                question: "In Java, int[] numbers syntax correctly declares an integer array named numbers.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 65,
                question: "The new keyword is used to create an array object in Java.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 66,
                question: "What is the default value of elements in a newly created int array?",
                options: [
                    "null",
                    "1",
                    "0",
                    "undefined"
                ],
                correct: 2
            },
            {
                id: 67,
                question: "A 2D array is declared as:",
                options: [
                    "int[] a",
                    "int a[]",
                    "int[][] a",
                    "int a"
                ],
                correct: 2
            },
            {
                id: 68,
                question: "Sorting array uses which utility class?",
                options: [
                    "Math",
                    "Arrays",
                    "System",
                    "Random"
                ],
                correct: 1
            },
            {
                id: 69,
                question: "Binary search requires the array to be:",
                options: [
                    "Random",
                    "Sorted",
                    "Empty",
                    "Null"
                ],
                correct: 1
            },
            {
                id: 70,
                question: "In object-oriented programming with Java, constructor overloading occurs when a class defines multiple constructors that share the same name but differ in their parameter lists; which of the following best describes this concept?",
                options: [
                    "Constructors with different class names",
                    "Constructors with the same name but different parameters",
                    "Constructors with different return types only",
                    "Constructors without parameters"
                ],
                correct: 1
            },
            {
                id: 71,
                question: "Which of the following conditions is required for constructors to be considered overloaded in Java?",
                options: [
                    "They must have different access modifiers only",
                    "They must have different parameter lists",
                    "They must return different values",
                    "They must belong to different classes"
                ],
                correct: 1
            },
            {
                id: 72,
                question: "In Java, constructors always have the same name as the class; therefore, how does the compiler distinguish between overloaded constructors?",
                options: [
                    "By checking return type",
                    "By checking parameter types and number",
                    "By checking method body",
                    "By checking comments"
                ],
                correct: 1
            },
            {
                id: 73,
                question: "Can constructors in Java have a return type such as void or int?",
                options: [
                    "Yes",
                    "No",
                    "Only void",
                    "Only int"
                ],
                correct: 1
            },
            {
                id: 74,
                question: "If a class contains three constructors with different parameter lists, this is an example of:",
                options: [
                    "Method overriding",
                    "Constructor overloading",
                    "Inheritance",
                    "Encapsulation"
                ],
                correct: 1
            },
            {
                id: 75,
                question: "this keyword is used inside a constructor to call another constructor in the same class.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 76,
                question: "If two constructors differ only in parameter data types but have the same number of parameters, are they considered overloaded?",
                options: [
                    "Yes",
                    "No",
                    "Only if they have different names",
                    "Only if they have different return types"
                ],
                correct: 0
            },
            {
                id: 77,
                question: "A no-argument constructor is a constructor that has no parameters.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 78,
                question: "In Java, if no constructor is explicitly defined in a class, what does the compiler automatically provide?",
                options: [
                    "A parameterized constructor",
                    "A default constructor",
                    "A copy constructor",
                    "No constructor"
                ],
                correct: 1
            },
            {
                id: 79,
                question: "In object-oriented programming, when one class inherits the properties and behaviors of another class to promote code reuse and hierarchical relationships, what is the parent class called?",
                options: [
                    "Subclass",
                    "Superclass",
                    "Child class",
                    "Parent class"
                ],
                correct: 1
            },
            {
                id: 80,
                question: "The class that inherits fields and methods from another class is known as subclass.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 81,
                question: "Which keyword is used in Java to establish an inheritance relationship between a subclass and a superclass?",
                options: [
                    "implements",
                    "extends",
                    "inherits",
                    "super"
                ],
                correct: 1
            },
            {
                id: 82,
                question: "The keyword used inside a subclass constructor to call the superclass constructor explicitly is super().",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 83,
                question: "Inheritance in Java supports which type of relationship between classes?",
                options: [
                    "has-a relationship",
                    "is-a relationship",
                    "uses-a relationship",
                    "contains-a relationship"
                ],
                correct: 1
            },
            {
                id: 84,
                question: "A subclass can override a method of its superclass to provide a specialized implementation.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 85,
                question: "In Java, the protected access modifier allows members to be accessed within the same package and by subclasses.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 86,
                question: "The protected access modifier provides more access than private but less access than public.",
                options: ["True", "False"],
                correct: 0
            },
            {
                id: 87,
                question: "If a member is declared private in the superclass, can a subclass access it directly?",
                options: [
                    "Yes",
                    "No",
                    "Only through getter methods",
                    "Only if it's static"
                ],
                correct: 1
            }
        ]
    }
};

function getAllQuestions() {
    const allQuestions = [];
    let questionId = 1;

    Object.keys(quizData).forEach(categoryKey => {
        const category = quizData[categoryKey];
        category.questions.forEach(question => {
            allQuestions.push({
                ...question,
                category: categoryKey,
                categoryTitle: category.title,
                globalId: questionId++
            });
        });
    });

    return allQuestions;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
