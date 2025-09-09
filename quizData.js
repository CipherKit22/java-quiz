const quizData = {
    'chapter10-11': {
        title: 'Chapter 10 & 11 Testing',
        description: 'Polymorphism, Inheritance, and Exception Handling',
        questions: [
            {
                id: 1,
                question: "What is polymorphism in Java?",
                options: [
                    "The ability of a class to be abstract",
                    "The ability of a class to have only one method",
                    "The ability of an object to take many forms",
                    "The process of hiding data"
                ],
                correct: 2
            },
            {
                id: 2,
                question: "Which of the following types of polymorphism does Java support?",
                options: [
                    "Compile-time polymorphism",
                    "Runtime polymorphism",
                    "Both A and B",
                    "None of the above"
                ],
                correct: 2
            },
            {
                id: 3,
                question: "What determines method overriding in Java?",
                options: [
                    "Method name only",
                    "Number of parameters",
                    "Return type only",
                    "Method signature"
                ],
                correct: 3
            },
            {
                id: 4,
                question: "Which of the following best describes method overloading?",
                options: [
                    "Defining multiple methods with the same name but different parameters",
                    "Defining multiple methods with the same name and same parameters",
                    "Defining a method in a subclass with the same signature",
                    "None of the above"
                ],
                correct: 0
            },
            {
                id: 5,
                question: "What happens if two methods have the same name and parameter list but different return types?",
                options: [
                    "It is allowed",
                    "It results in method overloading",
                    "It causes a compile-time error",
                    "It results in method overriding"
                ],
                correct: 2
            },
            {
                id: 6,
                question: "What does the final keyword mean when applied to a method in Java?",
                options: [
                    "The method cannot return any value",
                    "The method cannot be overridden by subclasses",
                    "The method cannot be called from other classes",
                    "The method must be static"
                ],
                correct: 1
            },
            {
                id: 7,
                question: "Which of these is a correct use of the final keyword?",
                options: [
                    "final class Student {}",
                    "class final Student {}",
                    "final void = method();",
                    "public class final = Student;"
                ],
                correct: 0
            },
            {
                id: 8,
                question: "What happens when you try to extend a final class?\n\nfinal class Animal {\n    void sound() {\n        System.out.println(\"Animal sound\");\n    }\n}\n\nclass Dog extends Animal {\n    void sound() {\n        System.out.println(\"Bark\");\n    }\n}",
                options: [
                    "Animal sound",
                    "Bark",
                    "Compile-time error",
                    "Runtime error"
                ],
                correct: 2
            },
            {
                id: 9,
                question: "Which keyword is used to implement an interface in a class?",
                options: [
                    "extends",
                    "inherits",
                    "implements",
                    "imports"
                ],
                correct: 2
            },
            {
                id: 10,
                question: "What is the main difference between an abstract class and an interface?",
                options: [
                    "Abstract class cannot have methods",
                    "Interface can have constructors",
                    "Abstract class can have method implementations, but interfaces cannot",
                    "Interface supports multiple inheritance, abstract classes do not"
                ],
                correct: 2
            },
            {
                id: 11,
                question: "What is method overloading in Java?",
                options: [
                    "Redefining a method in a subclass",
                    "Having methods with the same name but different parameter lists in the same class",
                    "Using static methods in subclasses",
                    "Changing return type only"
                ],
                correct: 1
            },
            {
                id: 12,
                question: "Can constructors be overridden in Java?",
                options: [
                    "Yes",
                    "No",
                    "Only in abstract classes",
                    "Only in static classes"
                ],
                correct: 1
            },
            {
                id: 13,
                question: "Can we override private methods in Java?",
                options: [
                    "Yes",
                    "No, private methods are not visible to subclasses",
                    "Only if class is final",
                    "Only if method is static"
                ],
                correct: 1
            },
            {
                id: 14,
                question: "Which of the following can NOT be overridden in Java?",
                options: [
                    "Non-static methods",
                    "Final methods",
                    "Abstract methods",
                    "Methods with the same signature"
                ],
                correct: 1
            },
            {
                id: 15,
                question: "What is the superclass of all exceptions in Java?",
                options: [
                    "Throwable",
                    "Object",
                    "Error",
                    "Exception"
                ],
                correct: 0
            },
            {
                id: 16,
                question: "Which of the following is an example of an unchecked exception?",
                options: [
                    "IOException",
                    "SQLException",
                    "ArrayIndexOutOfBoundsException",
                    "ClassNotFoundException"
                ],
                correct: 2
            },
            {
                id: 17,
                question: "Which keyword is used to manually throw an exception in Java?",
                options: [
                    "throws",
                    "throw",
                    "catch",
                    "raise"
                ],
                correct: 1
            },
            {
                id: 18,
                question: "Which of the following is the correct syntax to throw an exception?",
                options: [
                    "throw new Exception();",
                    "throws Exception();",
                    "throw Exception;",
                    "catch new Exception();"
                ],
                correct: 0
            },
            {
                id: 19,
                question: "What is the purpose of the catch block?",
                options: [
                    "To create new exceptions",
                    "To define code that is always executed",
                    "To handle exceptions thrown in the try block",
                    "To clean up resources"
                ],
                correct: 2
            },
            {
                id: 20,
                question: "Which of the following keywords is used to declare that a method may throw an exception?",
                options: [
                    "throw",
                    "final",
                    "throws",
                    "catch"
                ],
                correct: 2
            },
            {
                id: 21,
                question: "Which of the following statements is true?",
                options: [
                    "One try block must have only one catch",
                    "A try block must be followed by finally",
                    "Multiple catch blocks are allowed after a try block",
                    "A catch block must be followed by another catch"
                ],
                correct: 2
            },
            {
                id: 22,
                question: "Which exception occurs if you divide a number by zero?",
                options: [
                    "IOException",
                    "NumberFormatException",
                    "ArithmeticException",
                    "InputMismatchException"
                ],
                correct: 2
            },
            {
                id: 23,
                question: "Which package is used to create graphical user interfaces in Java?",
                options: [
                    "java.io",
                    "java.util",
                    "java.awt",
                    "java.sql"
                ],
                correct: 2
            },
            {
                id: 24,
                question: "Which method is used to make a frame visible?",
                options: [
                    "display(true)",
                    "setShow(true)",
                    "show(true)",
                    "setVisible(true)"
                ],
                correct: 3
            },
            {
                id: 25,
                question: "In Java AWT, which component is used to enter a single line of text?",
                options: [
                    "TextField",
                    "TextArea",
                    "Label",
                    "Button"
                ],
                correct: 0
            },
            {
                id: 26,
                question: "Which method is used to close a JFrame properly when clicking the close button?",
                options: [
                    "setClose(true)",
                    "setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);",
                    "close();",
                    "exit();"
                ],
                correct: 1
            },
            {
                id: 27,
                question: "Which of these methods is used to set the size of a window?",
                options: [
                    "setDimensions()",
                    "size()",
                    "setSize()",
                    "setWindowSize()"
                ],
                correct: 2
            },
            {
                id: 28,
                question: "What does the following code do?\nframe.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);",
                options: [
                    "Hides the window",
                    "Terminates the program when window is closed",
                    "Minimizes the window",
                    "Clears all components"
                ],
                correct: 1
            },
            {
                id: 29,
                question: "In Swing, which class is used to display a pop-up message dialog box?",
                options: [
                    "JOptionPane",
                    "JDialog",
                    "JFrame",
                    "JTextPane"
                ],
                correct: 0
            },
            {
                id: 30,
                question: "Which event is triggered when the user presses Enter in a JTextField?",
                options: [
                    "KeyEvent",
                    "TextEvent",
                    "ActionEvent",
                    "InputEvent"
                ],
                correct: 2
            }
        ]
    },
    'gui': {
        title: 'GUI Part I & II',
        description: 'Swing Components, Layout Managers, and Event Handling',
        questions: [
            {
                id: 1,
                question: "Which package must be imported to use JOptionPane in Java?",
                options: [
                    "java.awt.*",
                    "javax.swing.*",
                    "java.util.*",
                    "java.io.*"
                ],
                correct: 1
            },
            {
                id: 2,
                question: "Which of the following methods is used to display a message dialog box?",
                options: [
                    "JOptionPane.showInputDialog()",
                    "JOptionPane.showConfirmDialog()",
                    "JOptionPane.showMessageDialog()",
                    "JOptionPane.showOptionDialog()"
                ],
                correct: 2
            },
            {
                id: 3,
                question: "If you want to ask the user to enter a value using a dialog box, which method should be used?",
                options: [
                    "showInputDialog()",
                    "showMessageDialog()",
                    "showConfirmDialog()",
                    "showOptionDialog()"
                ],
                correct: 0
            },
            {
                id: 4,
                question: "Which Swing component is used to display a short string or an image icon?",
                options: [
                    "JTextField",
                    "JLabel",
                    "JButton",
                    "JTextArea"
                ],
                correct: 1
            },
            {
                id: 5,
                question: "Which Swing component allows the user to select one item from a drop-down list?",
                options: [
                    "JRadioButton",
                    "JCheckBox",
                    "JComboBox",
                    "JList"
                ],
                correct: 2
            },
            {
                id: 6,
                question: "Which component is used to create a multi-line text area?",
                options: [
                    "JTextField",
                    "JLabel",
                    "JTextArea",
                    "JPasswordField"
                ],
                correct: 2
            },
            {
                id: 7,
                question: "Which of the following is NOT a Swing component?",
                options: [
                    "JFrame",
                    "JButton",
                    "JPanel",
                    "Frame"
                ],
                correct: 3
            },
            {
                id: 8,
                question: "Which method is used to make a JFrame visible?",
                options: [
                    "setVisible(true)",
                    "display(true)",
                    "show()",
                    "open()"
                ],
                correct: 0
            },
            {
                id: 9,
                question: "Which listener is commonly used to handle button click events in Swing?",
                options: [
                    "MouseListener",
                    "KeyListener",
                    "ActionListener",
                    "WindowListener"
                ],
                correct: 2
            },
            {
                id: 10,
                question: "Which listener should be added to a JCheckBox to check when it is selected or deselected?",
                options: [
                    "ActionListener",
                    "ItemListener",
                    "KeyListener",
                    "WindowListener"
                ],
                correct: 1
            },
            {
                id: 11,
                question: "To handle menu item selection in a JMenuItem, which listener is most appropriate?",
                options: [
                    "ItemListener",
                    "ActionListener",
                    "ChangeListener",
                    "MouseMotionListener"
                ],
                correct: 1
            },
            {
                id: 12,
                question: "Which listener should be used with a JSlider to detect value changes?",
                options: [
                    "ChangeListener",
                    "ActionListener",
                    "KeyListener",
                    "ItemListener"
                ],
                correct: 0
            },
            {
                id: 13,
                question: "Which listener is best suited for JRadioButton selections?",
                options: [
                    "KeyListener",
                    "MouseListener",
                    "ItemListener",
                    "WindowListener"
                ],
                correct: 2
            },
            {
                id: 14,
                question: "Which layout manager arranges components in a row, one after another, like words in a sentence?",
                options: [
                    "FlowLayout",
                    "BorderLayout",
                    "GridLayout",
                    "CardLayout"
                ],
                correct: 0
            },
            {
                id: 15,
                question: "Which layout manager divides the container into five regions: North, South, East, West, and Center?",
                options: [
                    "FlowLayout",
                    "GridLayout",
                    "BorderLayout",
                    "CardLayout"
                ],
                correct: 2
            },
            {
                id: 16,
                question: "Which layout manager arranges components in a rectangular grid (rows and columns)?",
                options: [
                    "GridLayout",
                    "FlowLayout",
                    "BorderLayout",
                    "GridBagLayout"
                ],
                correct: 0
            },
            {
                id: 17,
                question: "If two components are added to the same region in BorderLayout, what happens?",
                options: [
                    "Both will be displayed side by side",
                    "The first will be replaced by the second",
                    "Both will overlap",
                    "An error occurs"
                ],
                correct: 1
            },
            {
                id: 18,
                question: "Which layout manager is best suited when you want all cells to be equal size?",
                options: [
                    "FlowLayout",
                    "BorderLayout",
                    "GridLayout",
                    "CardLayout"
                ],
                correct: 2
            },
            {
                id: 19,
                question: "Which package provides BoxLayout and GridBagLayout in Java?",
                options: [
                    "java.awt",
                    "javax.swing",
                    "Both a and b",
                    "java.util"
                ],
                correct: 2
            },
            {
                id: 20,
                question: "BoxLayout arranges components in which direction(s)?",
                options: [
                    "Horizontally only",
                    "Vertically only",
                    "Both horizontally and vertically",
                    "In a grid"
                ],
                correct: 2
            },
            {
                id: 21,
                question: "To create a vertical BoxLayout, which constant is used?",
                options: [
                    "BoxLayout.X_AXIS",
                    "BoxLayout.Y_AXIS",
                    "BoxLayout.LINE_AXIS",
                    "BoxLayout.PAGE_AXIS"
                ],
                correct: 1
            },
            {
                id: 22,
                question: "Which of the following statements about BoxLayout is true?",
                options: [
                    "All components in the box are forced to have the same size",
                    "Components keep their preferred sizes",
                    "Components are resized to fill the container fully",
                    "Components overlap each other"
                ],
                correct: 1
            },
            {
                id: 23,
                question: "Which layout manager is the most flexible and allows placing components in a grid with varying sizes?",
                options: [
                    "FlowLayout",
                    "BorderLayout",
                    "GridLayout",
                    "GridBagLayout"
                ],
                correct: 3
            },
            {
                id: 24,
                question: "In GridBagLayout, which property controls how a component should be resized to fit its cell?",
                options: [
                    "anchor",
                    "gridwidth",
                    "fill",
                    "insets"
                ],
                correct: 2
            },
            {
                id: 25,
                question: "Which Swing component is placed inside a JDesktopPane to represent a child window?",
                options: [
                    "JPanel",
                    "JInternalFrame",
                    "JFrame",
                    "JDialog"
                ],
                correct: 1
            },
            {
                id: 26,
                question: "Which of the following allows you to add multiple tabs in a single window?",
                options: [
                    "JTabbedPane",
                    "JDesktopPane",
                    "JScrollPane",
                    "JPanel"
                ],
                correct: 0
            },
            {
                id: 27,
                question: "Which method is used to change the Look-and-Feel at runtime?",
                options: [
                    "UIManager.setLookAndFeel(String className)",
                    "JFrame.setLookAndFeel(String className)",
                    "LookAndFeel.setStyle()",
                    "UIManager.applyLookAndFeel()"
                ],
                correct: 0
            },
            {
                id: 28,
                question: "In a JDesktopPane, multiple JInternalFrame objects can be:",
                options: [
                    "Minimized",
                    "Maximized",
                    "Closed",
                    "All of the above"
                ],
                correct: 3
            },
            {
                id: 29,
                question: "Which constructor of JInternalFrame allows you to specify whether the frame is resizable, closable, maximizable, and iconifiable?",
                options: [
                    "JInternalFrame(String title)",
                    "JInternalFrame(String title, boolean resizable, boolean closable, boolean maximizable, boolean iconifiable)",
                    "JInternalFrame()",
                    "JInternalFrame(String title, boolean resizable)"
                ],
                correct: 1
            },
            {
                id: 30,
                question: "What is the default tab placement in JTabbedPane?",
                options: [
                    "TOP",
                    "LEFT",
                    "BOTTOM",
                    "RIGHT"
                ],
                correct: 0
            },
            {
                id: 31,
                question: "Which listener is typically used to track tab selection changes in JTabbedPane?",
                options: [
                    "ActionListener",
                    "ChangeListener",
                    "ItemListener",
                    "ListSelectionListener"
                ],
                correct: 1
            },
            {
                id: 32,
                question: "In Swing Pluggable Look-and-Feel, which class provides the current UI settings?",
                options: [
                    "UIManager",
                    "LookAndFeel",
                    "SwingUtilities",
                    "JFrameManager"
                ],
                correct: 0
            },
            {
                id: 33,
                question: "Which interface is used to handle mouse click, press, release, enter, and exit events?",
                options: [
                    "MouseListener",
                    "MouseMotionListener",
                    "MouseAdapter",
                    "ActionListener"
                ],
                correct: 0
            },
            {
                id: 34,
                question: "Which interface is used to track mouse dragging and movement?",
                options: [
                    "MouseListener",
                    "MouseMotionListener",
                    "MouseAdapter",
                    "KeyListener"
                ],
                correct: 1
            },
            {
                id: 35,
                question: "Which package contains the classes and interfaces for mouse event handling in Java Swing?",
                options: [
                    "java.util.*",
                    "java.awt.event.*",
                    "javax.swing.event.*",
                    "java.io.*"
                ],
                correct: 1
            }
        ]
    },
    'sql': {
        title: 'Collection and SQL Testing',
        description: 'Collections Framework and SQL Database Operations',
        questions: [
            {
                id: 1,
                question: "Which collection class allows duplicate elements?",
                options: [
                    "Set",
                    "List",
                    "Map",
                    "Hashtable"
                ],
                correct: 1
            },
            {
                id: 2,
                question: "Which method is used to remove all elements from a Collection?",
                options: [
                    "delete()",
                    "clear()",
                    "removeAll()",
                    "reset()"
                ],
                correct: 1
            },
            {
                id: 3,
                question: "Which interface extends Collection but stores elements in FIFO order?",
                options: [
                    "List",
                    "Set",
                    "Queue",
                    "Map"
                ],
                correct: 2
            },
            {
                id: 4,
                question: "Which SQL command is used to retrieve data from a database?",
                options: [
                    "SELECT",
                    "UPDATE",
                    "DELETE",
                    "INSERT"
                ],
                correct: 0
            },
            {
                id: 5,
                question: "Which SQL keyword is used to sort results?",
                options: [
                    "ORDER BY",
                    "GROUP BY",
                    "SORT BY",
                    "RANK BY"
                ],
                correct: 0
            },
            {
                id: 6,
                question: "Which SQL statement updates data in a table?",
                options: [
                    "SELECT",
                    "UPDATE",
                    "MODIFY",
                    "ALTER"
                ],
                correct: 1
            },
            {
                id: 7,
                question: "Which of the following creates a new table?",
                options: [
                    "MAKE TABLE",
                    "NEW TABLE",
                    "CREATE TABLE",
                    "INSERT TABLE"
                ],
                correct: 2
            },
            {
                id: 8,
                question: "Which collection class does not allow duplicate elements?",
                options: [
                    "List",
                    "Set",
                    "Queue",
                    "Vector"
                ],
                correct: 1
            },
            {
                id: 9,
                question: "Which collection is LIFO (Last In First Out)?",
                options: [
                    "Queue",
                    "Stack",
                    "LinkedList",
                    "Set"
                ],
                correct: 1
            },
            {
                id: 10,
                question: "Which command is used to add new data in SQL?",
                options: [
                    "UPDATE",
                    "ADD",
                    "INSERT",
                    "APPEND"
                ],
                correct: 2
            },
            {
                id: 11,
                question: "Which SQL clause filters rows before grouping?",
                options: [
                    "WHERE",
                    "HAVING",
                    "ORDER BY",
                    "GROUP BY"
                ],
                correct: 0
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
