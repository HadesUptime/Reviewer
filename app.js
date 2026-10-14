// Science Questions - Chemical Reactions (Second Term First Summative)
const scienceQuestions = [
    // Part I: Basic Concepts (Questions 1-10)
    {
        id: 1,
        subject: "science",
        question: "What is a chemical reaction?",
        options: [
            "A change in shape only",
            "A process that forms new substances",
            "A change in size only",
            "A change in location"
        ],
        correct: 1,
        rationale: "A chemical reaction is a process that forms new substances with different properties."
    },
    {
        id: 2,
        subject: "science",
        question: "What are the starting substances in a chemical reaction called?",
        options: [
            "Products",
            "Catalysts",
            "Reactants",
            "Precipitates"
        ],
        correct: 2,
        rationale: "The starting substances in a chemical reaction are called reactants."
    },
    {
        id: 3,
        subject: "science",
        question: "What are the substances formed after a chemical reaction called?",
        options: [
            "Reactants",
            "Products",
            "Elements",
            "Coefficients"
        ],
        correct: 1,
        rationale: "The substances formed after a chemical reaction are called products."
    },
    {
        id: 4,
        subject: "science",
        question: "What does the arrow (→) in a chemical equation mean?",
        options: [
            "Equals",
            "Dissolves",
            "Produces or yields",
            "Disappears"
        ],
        correct: 2,
        rationale: "The arrow (→) in a chemical equation means produces or yields."
    },
    {
        id: 5,
        subject: "science",
        question: "Which of the following is a possible sign of a chemical reaction?",
        options: [
            "Moving an object",
            "Cutting paper",
            "Formation of gas bubbles",
            "Changing the position of an object"
        ],
        correct: 2,
        rationale: "Formation of gas bubbles is a possible sign that a chemical reaction has occurred."
    },
    {
        id: 6,
        subject: "science",
        question: "What is a precipitate?",
        options: [
            "A type of gas",
            "A solid formed from a solution during a reaction",
            "A liquid that evaporates",
            "A chemical symbol"
        ],
        correct: 1,
        rationale: "A precipitate is a solid formed from a solution during a chemical reaction."
    },
    {
        id: 7,
        subject: "science",
        question: "Which observation may indicate that a chemical reaction has occurred?",
        options: [
            "A color change",
            "Moving a chair",
            "Cutting paper",
            "Changing a container"
        ],
        correct: 0,
        rationale: "A color change may indicate that a chemical reaction has occurred."
    },
    {
        id: 8,
        subject: "science",
        question: "What happens to atoms during a chemical reaction?",
        options: [
            "They disappear",
            "They are destroyed",
            "They rearrange to form new substances",
            "They turn into nothing"
        ],
        correct: 2,
        rationale: "During a chemical reaction, atoms rearrange to form new substances, but are neither created nor destroyed."
    },
    {
        id: 9,
        subject: "science",
        question: "Which law states that matter cannot be created or destroyed during an ordinary chemical reaction?",
        options: [
            "Law of Gravity",
            "Law of Conservation of Mass",
            "Newton's First Law",
            "Law of Motion"
        ],
        correct: 1,
        rationale: "The Law of Conservation of Mass states that matter cannot be created or destroyed during an ordinary chemical reaction."
    },
    {
        id: 10,
        subject: "science",
        question: "What must be equal on both sides of a balanced chemical equation?",
        options: [
            "The number of compounds",
            "The number of molecules in all cases",
            "The number of atoms of each element",
            "The number of coefficients"
        ],
        correct: 2,
        rationale: "In a balanced chemical equation, the number of atoms of each element must be equal on both sides."
    },

    // Part II: Types of Chemical Reactions (Questions 11-25)
    {
        id: 11,
        subject: "science",
        question: "Which type of reaction combines two or more substances to form one product?",
        options: [
            "Decomposition",
            "Synthesis",
            "Single replacement",
            "Double replacement"
        ],
        correct: 1,
        rationale: "Synthesis is a reaction that combines two or more substances to form one product."
    },
    {
        id: 12,
        subject: "science",
        question: "What is the general pattern of a synthesis reaction?",
        options: [
            "AB -> A + B",
            "A + BC -> AC + B",
            "A + B -> AB",
            "AB + CD -> AD + CB"
        ],
        correct: 2,
        rationale: "The general pattern of a synthesis reaction is A + B -> AB."
    },
    {
        id: 13,
        subject: "science",
        question: "Which equation represents a synthesis reaction?",
        options: [
            "2H2O2 -> 2H2O + O2",
            "2H2 + O2 -> 2H2O",
            "Zn + 2HCl -> ZnCl2 + H2",
            "CH4 + 2O2 -> CO2 + 2H2O"
        ],
        correct: 1,
        rationale: "2H2 + O2 -> 2H2O represents synthesis (combination of hydrogen and oxygen to form water)."
    },
    {
        id: 14,
        subject: "science",
        question: "What happens during a decomposition reaction?",
        options: [
            "Two substances combine",
            "One compound breaks down into simpler substances",
            "Two compounds exchange ions",
            "A substance changes state only"
        ],
        correct: 1,
        rationale: "During a decomposition reaction, one compound breaks down into simpler substances."
    },
    {
        id: 15,
        subject: "science",
        question: "What is the general pattern of a decomposition reaction?",
        options: [
            "A + B -> AB",
            "AB -> A + B",
            "A + BC -> AC + B",
            "AB + CD -> AD + CB"
        ],
        correct: 1,
        rationale: "The general pattern of a decomposition reaction is AB -> A + B."
    },
    {
        id: 16,
        subject: "science",
        question: "Which equation represents a decomposition reaction?",
        options: [
            "2H2O2 -> 2H2O + O2",
            "2H2 + O2 -> 2H2O",
            "C + O2 -> CO2",
            "AgNO3 + NaCl -> AgCl + NaNO3"
        ],
        correct: 0,
        rationale: "2H2O2 -> 2H2O + O2 represents decomposition (hydrogen peroxide breaking down into water and oxygen)."
    },
    {
        id: 17,
        subject: "science",
        question: "What happens during a single replacement reaction?",
        options: [
            "One element replaces another element in a compound",
            "One compound breaks into simpler substances",
            "Two compounds exchange ions",
            "Two substances combine into one product"
        ],
        correct: 0,
        rationale: "In a single replacement reaction, one element replaces another element in a compound."
    },
    {
        id: 18,
        subject: "science",
        question: "What is the general pattern of a single replacement reaction?",
        options: [
            "A + B -> AB",
            "AB -> A + B",
            "A + BC -> AC + B",
            "AB + CD -> AD + CB"
        ],
        correct: 2,
        rationale: "The general pattern of a single replacement reaction is A + BC -> AC + B."
    },
    {
        id: 19,
        subject: "science",
        question: "In the reaction Zn + 2HCl -> ZnCl2 + H2, which element replaces hydrogen?",
        options: [
            "Chlorine",
            "Oxygen",
            "Zinc",
            "Carbon"
        ],
        correct: 2,
        rationale: "In Zn + 2HCl -> ZnCl2 + H2, zinc replaces hydrogen in the compound."
    },
    {
        id: 20,
        subject: "science",
        question: "What occurs during a double replacement reaction?",
        options: [
            "A compound breaks apart",
            "Two compounds exchange ions",
            "Two elements form one product",
            "A substance melts"
        ],
        correct: 1,
        rationale: "In a double replacement reaction, two compounds exchange ions."
    },
    {
        id: 21,
        subject: "science",
        question: "What is the general pattern of a double replacement reaction?",
        options: [
            "A + B -> AB",
            "AB -> A + B",
            "A + BC -> AC + B",
            "AB + CD -> AD + CB"
        ],
        correct: 3,
        rationale: "The general pattern of a double replacement reaction is AB + CD -> AD + CB."
    },
    {
        id: 22,
        subject: "science",
        question: "Which equation represents a double replacement reaction?",
        options: [
            "2H2 + O2 -> 2H2O",
            "2H2O2 -> 2H2O + O2",
            "AgNO3 + NaCl -> AgCl + NaNO3",
            "C + O2 -> CO2"
        ],
        correct: 2,
        rationale: "AgNO3 + NaCl -> AgCl + NaNO3 represents double replacement (exchange of ions)."
    },
    {
        id: 23,
        subject: "science",
        question: "What is a combustion reaction?",
        options: [
            "A reaction involving oxygen that releases energy",
            "A process of freezing",
            "A process of dissolving only",
            "A reaction that always absorbs heat"
        ],
        correct: 0,
        rationale: "A combustion reaction is a reaction involving oxygen that releases energy."
    },
    {
        id: 24,
        subject: "science",
        question: "What are the products of complete combustion of a hydrocarbon?",
        options: [
            "Salt and hydrogen",
            "Carbon dioxide and water",
            "Oxygen and hydrogen",
            "Carbon and salt"
        ],
        correct: 1,
        rationale: "The products of complete combustion of a hydrocarbon are carbon dioxide and water."
    },
    {
        id:  25,
        subject: "science",
        question: "Which equation represents the complete combustion of methane?",
        options: [
            "CH4 + 2O2 -> CO2 + 2H2O",
            "2H2O2 -> 2H2O + O2",
            "Zn + 2HCl -> ZnCl2 + H2",
            "AgNO3 + NaCl -> AgCl + NaNO3"
        ],
        correct: 0,
        rationale: "CH4 + 2O2 -> CO2 + 2H2O represents the complete combustion of methane."
    },

    // Part III: Chemical Equations (Questions 26-34)
    {
        id: 26,
        subject: "science",
        question: "What is a chemical equation?",
        options: [
            "A drawing of a laboratory",
            "A representation of a chemical reaction using formulas and symbols",
            "A list of laboratory rules",
            "A graph of temperature only"
        ],
        correct: 1,
        rationale: "A chemical equation is a representation of a chemical reaction using formulas and symbols."
    },
    {
        id: 27,
        subject: "science",
        question: "What do coefficients represent in a chemical equation?",
        options: [
            "The colors of substances",
            "The number of atoms in a chemical symbol",
            "The relative amounts of substances",
            "The state of matter only"
        ],
        correct: 2,
        rationale: "Coefficients in a chemical equation represent the relative amounts of substances."
    },
    {
        id: 28,
        subject: "science",
        question: "Why must chemical equations be balanced?",
        options: [
            "To make the equation longer",
            "To follow the Law of Conservation of Mass",
            "To change the reactants",
            "To make every reaction faster"
        ],
        correct: 1,
        rationale: "Chemical equations must be balanced to follow the Law of Conservation of Mass."
    },
    {
        id: 29,
        subject: "science",
        question: "Why should subscripts not be changed when balancing chemical equations?",
        options: [
            "They change the identity of the substance",
            "They make equations shorter",
            "They remove reactants",
            "They have no meaning"
        ],
        correct: 0,
        rationale: "Subscripts should not be changed because they change the identity of the substance."
    },
    {
        id: 30,
        subject: "science",
        question: "Which is the balanced form of H2 + O2 -> H2O?",
        options: [
            "H2 + O2 -> H2O",
            "2H2 + O2 -> 2H2O",
            "H2 + 2O2 -> H2O",
            "2H2 + 2O2 -> H2O"
        ],
        correct: 1,
        rationale: "2H2 + O2 -> 2H2O is the balanced form (2 hydrogen atoms and 2 oxygen atoms in reactants = 2 hydrogen atoms and 1 oxygen atom in products)."
    },
    {
        id: 31,
        subject: "science",
        question: "Which is the balanced form of N2 + H2 -> NH3?",
        options: [
            "N2 + H2 -> NH3",
            "N2 + 2H2 -> 2NH3",
            "N2 + 3H2 -> 2NH3",
            "2N2 + H2 -> NH3"
        ],
        correct: 2,
        rationale: "N2 + 3H2 -> 2NH3 is the balanced form (2 nitrogen atoms and 6 hydrogen atoms in reactants = 2 nitrogen atoms and 6 hydrogen atoms in products)."
    },
    {
        id: 32,
        subject: "science",
        question: "How many hydrogen atoms are in one H2O molecule?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correct: 1,
        rationale: "One H2O molecule contains 2 hydrogen atoms."
    },
    {
        id: 33,
        subject: "science",
        question: "How many oxygen atoms are represented by 2O2?",
        options: [
            "2",
            "3",
            "4",
            "6"
        ],
        correct: 2,
        rationale: "2O2 represents 2 oxygen molecules, each with 2 atoms, totaling 4 oxygen atoms."
    },
    {
        id: 34,
        subject: "science",
        question: "What does the chemical formula H2O represent?",
        options: [
            "Two oxygen atoms and one hydrogen atom",
            "Two hydrogen atoms and one oxygen atom",
            "Two water molecules",
            "One hydrogen atom and two oxygen atoms"
        ],
        correct: 1,
        rationale: "H2O represents two hydrogen atoms and one oxygen atom in a water molecule."
    },

    // Part IV: Physical and Chemical Changes (Questions 35-40)
    {
        id: 35,
        subject: "science",
        question: "Which of the following is an example of a physical change?",
        options: [
            "Rusting iron",
            "Burning wood",
            "Melting ice",
            "Cooking an egg"
        ],
        correct: 2,
        rationale: "Melting ice is a physical change because only the state of matter changes, not the chemical composition."
    },
    {
        id: 36,
        subject: "science",
        question: "Which of the following is an example of a chemical change?",
        options: [
            "Cutting paper",
            "Melting wax",
            "Boiling water",
            "Rusting iron"
        ],
        correct: 3,
        rationale: "Rusting iron is a chemical change because iron reacts with oxygen to form iron oxide."
    },
    {
        id: 37,
        subject: "science",
        question: "What distinguishes a chemical change from a physical change?",
        options: [
            "A chemical change forms new substances",
            "A physical change always releases gas",
            "A chemical change changes size only",
            "A physical change always forms a solid"
        ],
        correct: 0,
        rationale: "A chemical change forms new substances with different properties, unlike a physical change."
    },
    {
        id: 38,
        subject: "science",
        question: "Which process is generally a physical change?",
        options: [
            "Burning paper",
            "Digestion of food",
            "Freezing water",
            "Rusting a nail"
        ],
        correct: 2,
        rationale: "Freezing water is generally a physical change because only the state changes from liquid to solid."
    },
    {
        id: 39,
        subject: "science",
        question: "Which process is generally a chemical change?",
        options: [
            "Breaking glass",
            "Dissolving sugar in water",
            "Evaporating water",
            "Burning paper"
        ],
        correct: 3,
        rationale: "Burning paper is a chemical change because paper reacts with oxygen to form ash and gases."
    },
    {
        id: 40,
        subject: "science",
        question: "Does a temperature change always prove that a chemical reaction occurred?",
        options: [
            "Yes, always",
            "No, not by itself",
            "Only when water is present",
            "Only when a solid forms"
        ],
        correct: 1,
        rationale: "A temperature change alone does not prove a chemical reaction occurred; other signs like color change or gas formation are needed."
    },

    // Part V: Energy and Other Concepts (Questions 41-45)
    {
        id: 41,
        subject: "science",
        question: "What is a catalyst?",
        options: [
            "A substance that speeds up a reaction without being consumed overall",
            "A product of every reaction",
            "A type of precipitate",
            "A substance that must always be a gas"
        ],
        correct: 0,
        rationale: "A catalyst is a substance that speeds up a reaction without being consumed overall."
    },
    {
        id: 42,
        subject: "science",
        question: "What is an exothermic reaction?",
        options: [
            "A reaction that absorbs heat",
            "A reaction that releases heat",
            "A reaction with no energy change",
            "A physical change only"
        ],
        correct: 1,
        rationale: "An exothermic reaction is a reaction that releases heat to its surroundings."
    },
    {
        id: 43,
        subject: "science",
        question: "What is an endothermic reaction?",
        options: [
            "A reaction that releases heat",
            "A reaction that absorbs energy from its surroundings",
            "A reaction that always produces flames",
            "A reaction that forms only solids"
        ],
        correct: 1,
        rationale: "An endothermic reaction is a reaction that absorbs energy from its surroundings."
    },
    {
        id: 44,
        subject: "science",
        question: "Why is the Law of Conservation of Mass important when balancing chemical equations?",
        options: [
            "It makes equations longer",
            "It ensures that atoms are accounted for on both sides",
            "It changes the identity of elements",
            "It ensures that every reaction releases heat"
        ],
        correct: 1,
        rationale: "The Law of Conservation of Mass is important because it ensures that atoms are accounted for on both sides of the equation."
    },
    {
        id: 45,
        subject: "science",
        question: "What happens to the atoms of reactants when they form products?",
        options: [
            "The atoms are destroyed",
            "New atoms are created from nothing",
            "The atoms rearrange into new combinations",
            "Every atom becomes a different element"
        ],
        correct: 2,
        rationale: "The atoms of reactants rearrange into new combinations to form products, but are neither created nor destroyed."
    },

    // Alternative questions for Chemical Reactions
    {
        id: 101,
        subject: "science",
        question: "In the reaction AB + CD -> AD + CB, what type of reaction is this?",
        options: [
            "Synthesis",
            "Decomposition",
            "Single replacement",
            "Double replacement"
        ],
        correct: 3,
        rationale: "AB + CD -> AD + CB is a double replacement reaction where two compounds exchange ions."
    },
    {
        id: 102,
        subject: "science",
        question: "Which of the following is NOT a sign of a chemical reaction?",
        options: [
            "Color change",
            "Gas formation",
            "Temperature change alone",
            "Precipitate formation"
        ],
        correct: 2,
        rationale: "Temperature change alone is not a definitive sign of a chemical reaction; other indicators like color change, gas formation, or precipitate formation are needed."
    },
    {
        id: 103,
        subject: "science",
        question: "In the reaction 2Na + Cl2 -> 2NaCl, what type of reaction is this?",
        options: [
            "Decomposition",
            "Synthesis",
            "Single replacement",
            "Double replacement"
        ],
        correct: 1,
        rationale: "2Na + Cl2 -> 2NaCl is a synthesis reaction combining sodium and chlorine to form sodium chloride."
    },
    {
        id: 104,
        subject: "science",
        question: "What is formed when iron reacts with oxygen in the presence of water?",
        options: [
            "Iron oxide (rust)",
            "Iron chloride",
            "Iron sulfate",
            "Pure iron"
        ],
        correct: 0,
        rationale: "Iron reacts with oxygen in the presence of water to form iron oxide, commonly known as rust."
    },
    {
        id:  105,
        subject: "science",
        question: "Why can a catalyst be reused in a reaction?",
        options: [
            "It is consumed in the reaction",
            "It is regenerated at the end of the reaction",
            "It changes into a different substance",
            "It becomes part of the products"
        ],
        correct: 1,
        rationale: "A catalyst is regenerated at the end of the reaction, allowing it to be reused."
    }
];

// Mathematics Questions - General Mathematics Grade 11
// Summative Test Coverage: Functions to Piecewise Functions
// 45 Multiple-Choice Questions
const mathQuestions = [
    // Part I. Relations and Functions (Questions 1-9)
    {
        id: 1,
        subject: "math",
        question: "What is a relation in mathematics?",
        options: [
            "A set of numbers that are always equal",
            "A set of ordered pairs",
            "A multiplication operation",
            "A type of equation only"
        ],
        correct: 1,
        rationale: "A relation in mathematics is a set of ordered pairs that define a relationship between two sets."
    },
    {
        id: 2,
        subject: "math",
        question: "What is a function?",
        options: [
            "A relation where every input has exactly one output",
            "A relation where every input has two outputs",
            "A relation with no inputs",
            "A set of numbers without a pattern"
        ],
        correct: 0,
        rationale: "A function is a relation where each input (x-value) has exactly one output (y-value)."
    },
    {
        id: 3,
        subject: "math",
        question: "Which of the following relations is a function?",
        options: [
            "{(1,2), (1,3), (2,4)}",
            "{(1,2), (2,3), (3,4)}",
            "{(2,1), (2,3), (4,5)}",
            "{(3,1), (3,2), (3,3)}"
        ],
        correct: 1,
        rationale: "The relation {(1,2), (2,3), (3,4)} is a function because each x-value (1, 2, 3) has exactly one y-value."
    },
    {
        id: 4,
        subject: "math",
        question: "What is the domain of a function?",
        options: [
            "The set of all output values",
            "The set of all input values",
            "The highest value only",
            "The lowest value only"
        ],
        correct: 1,
        rationale: "The domain of a function is the set of all possible input values (x-values)."
    },
    {
        id: 5,
        subject: "math",
        question: "What is the range of a function?",
        options: [
            "The set of all input values",
            "The set of all negative values",
            "The set of all output values",
            "The set of all variables"
        ],
        correct: 2,
        rationale: "The range of a function is the set of all possible output values (y-values)."
    },
    {
        id: 6,
        subject: "math",
        question: "Which test determines whether a graph represents a function?",
        options: [
            "Horizontal Line Test",
            "Vertical Line Test",
            "Addition Test",
            "Inverse Test"
        ],
        correct: 1,
        rationale: "The Vertical Line Test determines if a graph represents a function - if any vertical line intersects the graph more than once, it is not a function."
    },
    {
        id: 7,
        subject: "math",
        question: "Which of the following is an example of a function?",
        options: [
            "One student assigned two different student numbers",
            "One input assigned exactly one output",
            "One input assigned three different outputs",
            "One input assigned no output in a stated relation"
        ],
        correct: 1,
        rationale: "A function requires exactly one output for each input."
    },
    {
        id: 8,
        subject: "math",
        question: "If a relation contains the ordered pairs {(8,4), (6,9), (7,2)}, what is its domain?",
        options: [
            "{8, 6, 7}",
            "{4, 9, 2}",
            "{8, 4, 6}",
            "{8, 6, 9}"
        ],
        correct: 0,
        rationale: "The domain is the set of all x-values: {8, 6, 7}."
    },
    {
        id: 9,
        subject: "math",
        question: "For the relation {(3,9), (5,9), (7,9)}, what is its range?",
        options: [
            "{3, 5, 7}",
            "{9}",
            "{3, 9}",
            "{5, 9}"
        ],
        correct: 1,
        rationale: "The range is the set of all y-values: {9}."
    },
    // Part II. Function Notation and Evaluation (Questions 10-17)
    {
        id: 10,
        subject: "math",
        question: "What does f(x) represent?",
        options: [
            "The input only",
            "The output of a function for input x",
            "The domain only",
            "The inverse of x"
        ],
        correct: 1,
        rationale: "f(x) represents the output value of the function f when the input is x."
    },
    {
        id: 11,
        subject: "math",
        question: "Given f(x) = 2x + 3, find f(4).",
        options: [
            "8",
            "10",
            "11",
            "14"
        ],
        correct: 2,
        rationale: "f(4) = 2(4) + 3 = 8 + 3 = 11."
    },
    {
        id: 12,
        subject: "math",
        question: "Given f(x) = 3x - 5, find f(2).",
        options: [
            "1",
            "6",
            "11",
            "-1"
        ],
        correct: 0,
        rationale: "f(2) = 3(2) - 5 = 6 - 5 = 1."
    },
    {
        id: 13,
        subject: "math",
        question: "Given f(x) = x² + 2, find f(3).",
        options: [
            "6",
            "9",
            "11",
            "12"
        ],
        correct: 2,
        rationale: "f(3) = 3² + 2 = 9 + 2 = 11."
    },
    {
        id: 14,
        subject: "math",
        question: "Given f(x) = 4x + 1, find f(-2).",
        options: [
            "-9",
            "-7",
            "7",
            "9"
        ],
        correct: 1,
        rationale: "f(-2) = 4(-2) + 1 = -8 + 1 = -7."
    },
    {
        id: 15,
        subject: "math",
        question: "Given f(x) = x² - 5, find f(-3).",
        options: [
            "-14",
            "-4",
            "4",
            "14"
        ],
        correct: 2,
        rationale: "f(-3) = (-3)² - 5 = 9 - 5 = 4."
    },
    {
        id: 16,
        subject: "math",
        question: "If f(x) = 5x, what is f(0)?",
        options: [
            "0",
            "1",
            "5",
            "10"
        ],
        correct: 0,
        rationale: "f(0) = 5(0) = 0."
    },
    {
        id: 17,
        subject: "math",
        question: "Given f(x) = 2x - 7, find f(5).",
        options: [
            "2",
            "3",
            "7",
            "10"
        ],
        correct: 1,
        rationale: "f(5) = 2(5) - 7 = 10 - 7 = 3."
    },
    // Part III. Operations on Functions (Questions 18-22)
    // For Questions 18-22, use: f(x) = x + 2, g(x) = 3x - 1
    {
        id: 18,
        subject: "math",
        question: "Given f(x) = x + 2 and g(x) = 3x - 1, find (f + g)(x).",
        options: [
            "4x + 1",
            "2x + 3",
            "4x - 1",
            "3x + 2"
        ],
        correct: 0,
        rationale: "(f + g)(x) = (x + 2) + (3x - 1) = 4x + 1."
    },
    {
        id: 19,
        subject: "math",
        question: "Given f(x) = x + 2 and g(x) = 3x - 1, find (f - g)(x).",
        options: [
            "2x + 3",
            "-2x + 3",
            "4x + 1",
            "2x - 3"
        ],
        correct: 1,
        rationale: "(f - g)(x) = (x + 2) - (3x - 1) = x + 2 - 3x + 1 = -2x + 3."
    },
    {
        id: 20,
        subject: "math",
        question: "Given f(x) = x + 2 and g(x) = 3x - 1, find (fg)(x).",
        options: [
            "3x² + 5x - 2",
            "3x² - x + 2",
            "4x + 1",
            "3x² + 6x - 1"
        ],
        correct: 0,
        rationale: "(fg)(x) = (x + 2)(3x - 1) = 3x² - x + 6x - 2 = 3x² + 5x - 2."
    },
    {
        id: 21,
        subject: "math",
        question: "Given f(x) = x + 2 and g(x) = 3x - 1, find (f/g)(x).",
        options: [
            "(x + 2)/(3x - 1)",
            "(3x - 1)/(x + 2)",
            "4x + 1",
            "3x² + 5x - 2"
        ],
        correct: 0,
        rationale: "(f/g)(x) = f(x) / g(x) = (x + 2)/(3x - 1)."
    },
    {
        id: 22,
        subject: "math",
        question: "For (f/g)(x) = (x + 2)/(3x - 1), which value of x must be excluded from the domain?",
        options: [
            "x = 0",
            "x = 1",
            "x = 1/3",
            "x = -2"
        ],
        correct: 2,
        rationale: "The denominator 3x - 1 = 0 when x = 1/3, so x = 1/3 must be excluded to avoid division by zero."
    },
    // Part IV. Composition of Functions (Questions 23-28)
    {
        id: 23,
        subject: "math",
        question: "What does (f o g)(x) mean?",
        options: [
            "f(x) + g(x)",
            "f(x) - g(x)",
            "f(g(x))",
            "f(x)g(x)"
        ],
        correct: 2,
        rationale: "(f o g)(x) means f(g(x)), where g(x) is used as the input to f."
    },
    {
        id: 24,
        subject: "math",
        question: "Given f(x) = 2x + 1 and g(x) = x², find (f o g)(x).",
        options: [
            "2x + 1",
            "2x² + 1",
            "(2x + 1)²",
            "x² + 1"
        ],
        correct: 1,
        rationale: "(f o g)(x) = f(g(x)) = f(x²) = 2(x²) + 1 = 2x² + 1."
    },
    {
        id: 25,
        subject: "math",
        question: "Given f(x) = 2x + 1 and g(x) = x², find (g o f)(x).",
        options: [
            "2x² + 1",
            "4x² + 4x + 1",
            "x² + 2x + 1",
            "4x + 1"
        ],
        correct: 1,
        rationale: "(g o f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)² = 4x² + 4x + 1."
    },
    {
        id: 26,
        subject: "math",
        question: "Given f(x) = x + 3 and g(x) = 2x, find f(g(4)).",
        options: [
            "8",
            "11",
            "14",
            "16"
        ],
        correct: 1,
        rationale: "g(4) = 2(4) = 8, then f(8) = 8 + 3 = 11."
    },
    {
        id: 27,
        subject: "math",
        question: "Given f(x) = 3x - 2 and g(x) = x + 4, find g(f(2)).",
        options: [
            "4",
            "6",
            "8",
            "10"
        ],
        correct: 2,
        rationale: "f(2) = 3(2) - 2 = 4, then g(4) = 4 + 4 = 8."
    },
    {
        id: 28,
        subject: "math",
        question: "Is f(g(x)) always equal to g(f(x))?",
        options: [
            "Yes, for all functions",
            "No, the order of composition can change the result",
            "Yes, if x is positive",
            "No, composition is never possible"
        ],
        correct: 1,
        rationale: "Function composition is not commutative - f(g(x)) is not always equal to g(f(x))."
    },
    // Part V. One-to-One and Inverse Functions (Questions 29-36)
    {
        id: 29,
        subject: "math",
        question: "What is a one-to-one function?",
        options: [
            "A function where every input has two outputs",
            "A function where different inputs have different outputs",
            "A function with no domain",
            "A function with only one ordered pair"
        ],
        correct: 1,
        rationale: "A one-to-one function is where different inputs have different outputs - each output corresponds to exactly one input."
    },
    {
        id: 30,
        subject: "math",
        question: "Which test is used to determine whether a function is one-to-one from its graph?",
        options: [
            "Vertical Line Test",
            "Horizontal Line Test",
            "Addition Test",
            "Substitution Test"
        ],
        correct: 1,
        rationale: "The Horizontal Line Test determines if a function is one-to-one - if any horizontal line intersects the graph more than once, it is not one-to-one."
    },
    {
        id: 31,
        subject: "math",
        question: "What is the inverse of a function?",
        options: [
            "A function that reverses the original function's input-output relationship",
            "A function that always squares the input",
            "A function that adds zero",
            "A function that doubles every output"
        ],
        correct: 0,
        rationale: "The inverse of a function reverses the input-output relationship - if f(a) = b, then f⁻¹(b) = a."
    },
    {
        id: 32,
        subject: "math",
        question: "What is the notation for the inverse of f(x)?",
        options: [
            "f(x)²",
            "1/f(x)",
            "f⁻¹(x)",
            "f'(x)"
        ],
        correct: 2,
        rationale: "The notation f⁻¹(x) represents the inverse function of f(x)."
    },
    {
        id: 33,
        subject: "math",
        question: "Find the inverse of f(x) = 2x + 4.",
        options: [
            "f⁻¹(x) = 2x - 4",
            "f⁻¹(x) = (x - 4)/2",
            "f⁻¹(x) = (x + 4)/2",
            "f⁻¹(x) = 4x + 2"
        ],
        correct: 1,
        rationale: "Let y = 2x + 4. Swap x and y: x = 2y + 4. Solve: x - 4 = 2y, so y = (x - 4)/2."
    },
    {
        id: 34,
        subject: "math",
        question: "Find the inverse of f(x) = 3x - 6.",
        options: [
            "f⁻¹(x) = (x + 6)/3",
            "f⁻¹(x) = (x - 6)/3",
            "f⁻¹(x) = 3x + 6",
            "f⁻¹(x) = x/3 - 6"
        ],
        correct: 0,
        rationale: "Let y = 3x - 6. Swap x and y: x = 3y - 6. Solve: x + 6 = 3y, so y = (x + 6)/3."
    },
    {
        id: 35,
        subject: "math",
        question: "If f(x) = x + 5, what is f⁻¹(x)?",
        options: [
            "x + 5",
            "x - 5",
            "5 - x",
            "5x"
        ],
        correct: 1,
        rationale: "Let y = x + 5. Swap x and y: x = y + 5. Solve: y = x - 5."
    },
    {
        id: 36,
        subject: "math",
        question: "What is the first step when finding the inverse of a function using algebra?",
        options: [
            "Square both sides",
            "Replace f(x) with y",
            "Multiply both sides by zero",
            "Add the same number to every term"
        ],
        correct: 1,
        rationale: "The first step in finding an inverse function is to replace f(x) with y."
    },
    // Part VI. Piecewise Functions (Questions 37-45)
    // For Questions 37-40, use: f(x) = x + 2 if x < 0, f(x) = 2x + 1 if x ≥ 0
    {
        id: 37,
        subject: "math",
        question: "Given f(x) = x + 2 if x < 0, and f(x) = 2x + 1 if x ≥ 0, find f(-3).",
        options: [
            "-1",
            "-3",
            "1",
            "5"
        ],
        correct: 0,
        rationale: "Since -3 < 0, use f(x) = x + 2: f(-3) = -3 + 2 = -1."
    },
    {
        id: 38,
        subject: "math",
        question: "Given f(x) = x + 2 if x < 0, and f(x) = 2x + 1 if x ≥ 0, find f(2).",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 3,
        rationale: "Since 2 ≥ 0, use f(x) = 2x + 1: f(2) = 2(2) + 1 = 5."
    },
    {
        id: 39,
        subject: "math",
        question: "Given f(x) = x + 2 if x < 0, and f(x) = 2x + 1 if x ≥ 0, find f(0).",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        correct: 1,
        rationale: "Since 0 ≥ 0, use f(x) = 2x + 1: f(0) = 2(0) + 1 = 1."
    },
    {
        id: 40,
        subject: "math",
        question: "Given f(x) = x + 2 if x < 0, and f(x) = 2x + 1 if x ≥ 0, which rule should be used to evaluate f(-5)?",
        options: [
            "x + 2",
            "2x + 1",
            "Both rules",
            "Neither rule"
        ],
        correct: 0,
        rationale: "Since -5 < 0, use the rule f(x) = x + 2."
    },
    {
        id: 41,
        subject: "math",
        question: "What is a piecewise function?",
        options: [
            "A function that uses one rule for every possible input",
            "A function defined by different rules for different conditions",
            "A function with no output",
            "A function that only uses multiplication"
        ],
        correct: 1,
        rationale: "A piecewise function is defined by different rules for different conditions or intervals of the domain."
    },
    {
        id: 42,
        subject: "math",
        question: "What does x ≤ 3 mean?",
        options: [
            "x is greater than 3",
            "x is less than 3 only",
            "x is less than or equal to 3",
            "x is greater than or equal to 3"
        ],
        correct: 2,
        rationale: "x ≤ 3 means x is less than or equal to 3."
    },
    {
        id: 43,
        subject: "math",
        question: "What does x > -2 mean?",
        options: [
            "x is less than -2",
            "x is greater than -2",
            "x is less than or equal to -2",
            "x is equal to -2 only"
        ],
        correct: 1,
        rationale: "x > -2 means x is greater than -2."
    },
    {
        id: 44,
        subject: "math",
        question: "Given f(x) = 3x if x ≤ 1, and f(x) = x + 4 if x > 1, find f(1).",
        options: [
            "1",
            "3",
            "4",
            "5"
        ],
        correct: 1,
        rationale: "Since 1 ≤ 1, use f(x) = 3x: f(1) = 3(1) = 3."
    },
    {
        id: 45,
        subject: "math",
        question: "Given f(x) = x² if x < 2, and f(x) = 2x + 1 if x ≥ 2, find f(3).",
        options: [
            "6",
            "7",
            "9",
            "10"
        ],
        correct: 1,
        rationale: "Since 3 ≥ 2, use f(x) = 2x + 1: f(3) = 2(3) + 1 = 7."
    }
];

// Biology Questions - Plant Biology (Second Term First Summative)
const biologyQuestions = [
    // Part 1: Plant Cells and Tissues (Questions 1-10)
    {
        id: 1,
        subject: "biology",
        question: "What are the basic units of life in plants?",
        options: [
            "Tissues",
            "Cells",
            "Organs",
            "Systems"
        ],
        correct: 1,
        rationale: "Cells are the basic units of life in plants, as in all living organisms."
    },
    {
        id: 2,
        subject: "biology",
        question: "Similar cells work together to form what structures that perform specific functions?",
        options: [
            "Tissues",
            "Organs",
            "Organelles",
            "Meristems"
        ],
        correct: 0,
        rationale: "Similar cells working together form tissues that perform specific functions."
    },
    {
        id: 3,
        subject: "biology",
        question: "Plant tissues are organized into how many main tissue systems?",
        options: [
            "Two",
            "Three",
            "Four",
            "Five"
        ],
        correct: 1,
        rationale: "Plant tissues are organized into three main tissue systems: dermal, ground, and vascular."
    },
    {
        id: 4,
        subject: "biology",
        question: "What are the three main tissue systems found in plants?",
        options: [
            "Xylem, phloem, cambium",
            "Epidermis, cortex, pith",
            "Dermal, ground, and vascular tissue systems",
            "Parenchyma, collenchyma, sclerenchyma"
        ],
        correct: 2,
        rationale: "The three main tissue systems are dermal, ground, and vascular tissue systems."
    },
    {
        id: 5,
        subject: "biology",
        question: "What does the dermal tissue system function as, and what does it mainly include?",
        options: [
            "Photosynthesis storage; parenchyma",
            "The protective covering of the plant; mainly includes the epidermis",
            "Structural support; collenchyma",
            "Water transport; xylem"
        ],
        correct: 1,
        rationale: "The dermal tissue system functions as the protective covering of the plant and mainly includes the epidermis."
    },
    {
        id: 6,
        subject: "biology",
        question: "Between which two tissue systems is the ground tissue system located?",
        options: [
            "Xylem and phloem",
            "Cortex and epidermis",
            "The dermal and vascular tissues",
            "Apical and lateral meristems"
        ],
        correct: 2,
        rationale: "The ground tissue system is located between the dermal and vascular tissues."
    },
    {
        id: 7,
        subject: "biology",
        question: "What three tissue types are included in the ground tissue system?",
        options: [
            "Parenchyma, collenchyma, and sclerenchyma",
            "Epidermis, cuticle, trichome",
            "Xylem, phloem, cambium",
            "Cork, periderm, bark"
        ],
        correct: 0,
        rationale: "The ground tissue system includes parenchyma, collenchyma, and sclerenchyma."
    },
    {
        id: 8,
        subject: "biology",
        question: "What system serves as the plant's transport system and consists of xylem and phloem?",
        options: [
            "Dermal tissue system",
            "Ground tissue system",
            "The vascular tissue system",
            "Meristematic system"
        ],
        correct: 2,
        rationale: "The vascular tissue system serves as the plant's transport system and consists of xylem and phloem."
    },
    {
        id: 9,
        subject: "biology",
        question: "What are the most common and least specialized plant cells, featuring thin primary walls and living nuclei at maturity?",
        options: [
            "Sclerenchyma cells",
            "Collenchyma cells",
            "Parenchyma cells",
            "Guard cells"
        ],
        correct: 2,
        rationale: "Parenchyma cells are the most common and least specialized plant cells with thin primary walls and living nuclei at maturity."
    },
    {
        id: 10,
        subject: "biology",
        question: "What metabolic tasks are handled by parenchyma cells located in the leaf mesophyll?",
        options: [
            "Water transport",
            "Photosynthesis",
            "Lignin deposition",
            "Secondary growth"
        ],
        correct: 1,
        rationale: "Parenchyma cells in the leaf mesophyll handle photosynthesis."
    },

    // Part 2: Plant Cell Types & Permanent Tissues (Questions 11-20)
    {
        id: 11,
        subject: "biology",
        question: "What tasks do parenchyma cells perform in roots and stems?",
        options: [
            "Food and starch storage, as well as wound healing",
            "Rigid structural support only",
            "Waterproof barrier creation via suberin",
            "Primary lengthening of internodes"
        ],
        correct: 0,
        rationale: "Parenchyma cells in roots and stems perform food and starch storage, as well as wound healing."
    },
    {
        id: 12,
        subject: "biology",
        question: "What are the cell walls of parenchyma cells primarily made of?",
        options: [
            "Lignin",
            "Suberin",
            "Cellulose",
            "Pectin"
        ],
        correct: 2,
        rationale: "The cell walls of parenchyma cells are primarily made of cellulose."
    },
    {
        id: 13,
        subject: "biology",
        question: "How are collenchyma cells characterized regarding their shape and cell walls?",
        options: [
            "Elongated living cells with unevenly thickened primary cell walls that lack lignin",
            "Dead cells at maturity with heavy lignin",
            "Isodiametric cells with thin secondary walls",
            "Circular cells with narrow lumens"
        ],
        correct: 0,
        rationale: "Collenchyma cells are elongated living cells with unevenly thickened primary cell walls that lack lignin."
    },
    {
        id: 14,
        subject: "biology",
        question: "What type of support do collenchyma cells provide to growing plant parts, such as young stems and leaf petioles?",
        options: [
            "Rigid, unyielding support",
            "Flexible structural support and tensile strength",
            "Complete waterproofing",
            "Active transport of sugars"
        ],
        correct: 1,
        rationale: "Collenchyma cells provide flexible structural support and tensile strength to growing plant parts."
    },
    {
        id: 15,
        subject: "biology",
        question: "What distinct chemical components are found in heavy, localized deposits in collenchyma cell walls?",
        options: [
            "Cellulose, hemicellulose, and pectin",
            "Pure lignin and suberin",
            "Starch and chlorophyll",
            "Silica and calcium carbonate"
        ],
        correct: 0,
        rationale: "Heavy, localized deposits in collenchyma cell walls contain cellulose, hemicellulose, and pectin."
    },
    {
        id: 16,
        subject: "biology",
        question: "Why do collenchyma cells remain pliable and translucent under a light microscope?",
        options: [
            "Because they lack chloroplasts",
            "Because they lack lignin",
            "Because they have thin secondary walls",
            "Because they are dead at maturity"
        ],
        correct: 1,
        rationale: "Collenchyma cells remain pliable and translucent because they lack lignin."
    },
    {
        id: 17,
        subject: "biology",
        question: "How are sclerenchyma cells described at maturity?",
        options: [
            "Living cells with active nuclei",
            "Pliable cells with thin primary walls",
            "Rigid, dead cells at maturity with thick, hardened secondary walls containing lignin",
            "Unspecialized cells for storage"
        ],
        correct: 2,
        rationale: "Sclerenchyma cells are rigid, dead cells at maturity with thick, hardened secondary walls containing lignin."
    },
    {
        id: 18,
        subject: "biology",
        question: "What kind of support do sclerenchyma cells provide in non-growing parts of the plant?",
        options: [
            "Temporary flexible support",
            "Maximum structural support",
            "Photosynthetic support",
            "Meristematic division support"
        ],
        correct: 1,
        rationale: "Sclerenchyma cells provide maximum structural support in non-growing parts of the plant."
    },
    {
        id: 19,
        subject: "biology",
        question: "What are the two main subtypes of sclerenchyma cells?",
        options: [
            "Xylem and phloem",
            "Epidermis and periderm",
            "Long, slender fibers and hard, versatile sclereids",
            "Companion cells and sieve tubes"
        ],
        correct: 2,
        rationale: "The two main subtypes of sclerenchyma cells are long, slender fibers and hard, versatile sclereids."
    },
    {
        id: 20,
        subject: "biology",
        question: "What happens to the inner cell space (lumen) in sclerenchyma cells due to thick secondary wall layers?",
        options: [
            "It expands significantly",
            "It fills with chloroplasts",
            "It becomes very small and narrow",
            "It disappears entirely to form vessel elements"
        ],
        correct: 2,
        rationale: "Due to thick secondary wall layers, the lumen in sclerenchyma cells becomes very small and narrow."
    },

    // Part 3: Meristematic Tissues and Growth (Questions 21-32)
    {
        id: 21,
        subject: "biology",
        question: "What are meristems defined as?",
        options: [
            "Regions of unspecialized, actively dividing cells in plants that enable continuous growth and development",
            "Dead transport tubes in the stem center",
            "Protective epidermal layers on leaves",
            "Storage tissues found in roots"
        ],
        correct: 0,
        rationale: "Meristems are regions of unspecialized, actively dividing cells in plants that enable continuous growth and development."
    },
    {
        id: 22,
        subject: "biology",
        question: "What are the three main types of meristematic tissues?",
        options: [
            "Dermal, ground, vascular",
            "Parenchyma, collenchyma, sclerenchyma",
            "Apical meristem, lateral meristem, and intercalary meristem",
            "Xylem, phloem, cambium"
        ],
        correct: 2,
        rationale: "The three main types of meristematic tissues are apical meristem, lateral meristem, and intercalary meristem."
    },
    {
        id: 23,
        subject: "biology",
        question: "What type of growth is caused by apical meristems?",
        options: [
            "Secondary growth (widening)",
            "Primary growth (i.e., lengthening of the plant)",
            "Cork production",
            "Wound healing growth"
        ],
        correct: 1,
        rationale: "Apical meristems cause primary growth, which is the lengthening of the plant."
    },
    {
        id: 24,
        subject: "biology",
        question: "Where do apical meristems occur?",
        options: [
            "At the tips of shoots and roots",
            "Inside the vascular bundle",
            "In the internodes of grasses",
            "Beneath the bark of mature trees"
        ],
        correct: 0,
        rationale: "Apical meristems occur at the tips of shoots and roots."
    },
    {
        id: 25,
        subject: "biology",
        question: "What new structures are produced by apical meristems?",
        options: [
            "Secondary wood and inner bark",
            "New leaves and flowers",
            "Cork cells and periderm",
            "Sclerenchyma fibers"
        ],
        correct: 1,
        rationale: "Apical meristems produce new leaves and flowers."
    },
    {
        id: 26,
        subject: "biology",
        question: "What type of growth is caused by lateral meristems?",
        options: [
            "Primary growth (lengthening)",
            "Secondary growth (i.e., widening of the plant)",
            "Intercalary elongation",
            "Leaf mesophyll development"
        ],
        correct: 1,
        rationale: "Lateral meristems cause secondary growth, which is the widening of the plant."
    },
    {
        id: 27,
        subject: "biology",
        question: "Where does lateral meristem occur in the stem?",
        options: [
            "At the cambium",
            "At the root tip",
            "In the epidermis",
            "Within the leaf blade"
        ],
        correct: 0,
        rationale: "Lateral meristem occurs at the cambium in the stem."
    },
    {
        id: 28,
        subject: "biology",
        question: "What do lateral meristems produce on trees regarding bark?",
        options: [
            "Leaves",
            "Bark on trees",
            "Root hairs",
            "Flower petals"
        ],
        correct: 1,
        rationale: "Lateral meristems produce bark on trees."
    },
    {
        id: 29,
        subject: "biology",
        question: "How is the vascular cambium described structurally in a lateral meristem?",
        options: [
            "As a thick layer of dead cells covering roots",
            "As a thin cylinder of lateral meristem located between the primary xylem and primary phloem",
            "As hollow tubes for water transport",
            "As photosynthetic cells in the cortex"
        ],
        correct: 1,
        rationale: "The vascular cambium is a thin cylinder of lateral meristem located between the primary xylem and primary phloem."
    },
    {
        id: 30,
        subject: "biology",
        question: "What does the vascular cambium produce to the inside and outside, respectively?",
        options: [
            "Epidermis to the inside, cork to the outside",
            "Primary xylem to the inside, primary phloem to the outside",
            "Secondary xylem (wood) to the inside and secondary phloem (inner bark) to the outside",
            "Pith to the inside, cortex to the outside"
        ],
        correct: 2,
        rationale: "The vascular cambium produces secondary xylem (wood) to the inside and secondary phloem (inner bark) to the outside."
    },
    {
        id: 31,
        subject: "biology",
        question: "Where is the intercalary meristem located?",
        options: [
            "In the leaves and internodes at the intercalary position",
            "Exclusively in root caps",
            "At the very outer edge of tree bark",
            "Inside the seed coat"
        ],
        correct: 0,
        rationale: "The intercalary meristem is located in the leaves and internodes at the intercalary position."
    },
    {
        id: 32,
        subject: "biology",
        question: "In which types of plants is intercalary meristem typically found?",
        options: [
            "Woody dicots only",
            "Grass, monocots, and pines",
            "Aquatic algae",
            "Ferns and mosses"
        ],
        correct: 1,
        rationale: "Intercalary meristem is typically found in grass, monocots, and pines."
    },

    // Part 4: Cork, Vascular Tissues, and Plant Organs (Questions 33-45)
    {
        id: 33,
        subject: "biology",
        question: "What is cork in woody plants?",
        options: [
            "A protective, waterproof tissue that forms the outer layer of bark",
            "The living tissue that transports food",
            "The central pith of a stem",
            "The primary site of photosynthesis"
        ],
        correct: 0,
        rationale: "Cork is a protective, waterproof tissue that forms the outer layer of bark in woody plants."
    },
    {
        id: 34,
        subject: "biology",
        question: "What waxy substance do cork cells contain to prevent water loss and block pathogens?",
        options: [
            "Lignin",
            "Pectin",
            "Suberin",
            "Cellulose"
        ],
        correct: 2,
        rationale: "Cork cells contain suberin, a waxy substance that prevents water loss and blocks pathogens."
    },
    {
        id: 35,
        subject: "biology",
        question: "What type of lateral meristem produces cork cells on its outer side?",
        options: [
            "Vascular cambium",
            "Cork cambium",
            "Apical meristem",
            "Intercalary meristem"
        ],
        correct: 1,
        rationale: "The cork cambium is the lateral meristem that produces cork cells on its outer side."
    },
    {
        id: 36,
        subject: "biology",
        question: "Together, cork and cork cambium form what layer that replaces the epidermis as the plant grows wider?",
        options: [
            "The periderm",
            "The vascular cylinder",
            "The mesophyll",
            "The root cortex"
        ],
        correct: 0,
        rationale: "Cork and cork cambium together form the periderm, which replaces the epidermis as the plant grows wider."
    },
    {
        id: 37,
        subject: "biology",
        question: "What is the primary function of the vascular tissue called xylem?",
        options: [
            "It moves water and dissolved minerals upward from the roots to the stems and leaves",
            "It distributes sugars down to the roots",
            "It provides dermal protection",
            "It stores excess starch"
        ],
        correct: 0,
        rationale: "Xylem moves water and dissolved minerals upward from the roots to the stems and leaves."
    },
    {
        id: 38,
        subject: "biology",
        question: "What tough substance reinforces mature xylem cells to provide structural support?",
        options: [
            "Suberin",
            "Lignin",
            "Pectin",
            "Cellulose only"
        ],
        correct: 1,
        rationale: "Lignin reinforces mature xylem cells to provide structural support."
    },
    {
        id: 39,
        subject: "biology",
        question: "What is the function of phloem in vascular tissue?",
        options: [
            "It transports water unilaterally",
            "It transports sugars and organic nutrients made during photosynthesis to all parts of the plant in multiple directions",
            "It forms the outer bark barrier",
            "It drives primary vertical lengthening"
        ],
        correct: 1,
        rationale: "Phloem transports sugars and organic nutrients made during photosynthesis to all parts of the plant in multiple directions."
    },
    {
        id: 40,
        subject: "biology",
        question: "What specialized living cells make up phloem tissue?",
        options: [
            "Sieve tubes and companion cells",
            "Tracheids and vessel elements",
            "Collenchyma and fibers",
            "Cork and cork cambium"
        ],
        correct: 0,
        rationale: "Phloem tissue is made up of specialized living cells called sieve tubes and companion cells."
    },
    {
        id: 41,
        subject: "biology",
        question: "How are xylem and phloem grouped together in stems, roots, and leaves?",
        options: [
            "They form vascular bundles, acting as the plant's plumbing system",
            "They form random scattered clusters in the epidermis",
            "They function independently of ground tissue",
            "They convert into meristematic cambium"
        ],
        correct: 0,
        rationale: "Xylem and phloem are grouped together in vascular bundles, acting as the plant's plumbing system."
    },
    {
        id: 42,
        subject: "biology",
        question: "What are the central regions and boundary layers typically found in a cross-section of a stem?",
        options: [
            "Epidermis, cortex, phloem, xylem, pith, and the vascular cylinder",
            "Cuticle, stomata, and guard cells",
            "Apical tips and nodes",
            "Bark, cork, and periderm"
        ],
        correct: 0,
        rationale: "A cross-section of a stem typically shows epidermis, cortex, phloem, xylem, pith, and the vascular cylinder."
    },
    {
        id: 43,
        subject: "biology",
        question: "What are the five major parts and organs of plants?",
        options: [
            "Roots, stems, leaves, flowers, and fruits",
            "Xylem, phloem, cambium, cortex, pith",
            "Parenchyma, collenchyma, sclerenchyma, dermal, vascular",
            "Seeds, spores, cones, needles, moss"
        ],
        correct: 0,
        rationale: "The five major parts and organs of plants are roots, stems, leaves, flowers, and fruits."
    },
    {
        id: 44,
        subject: "biology",
        question: "What specific subtype of sclereids is cylindrical and shaped like a bone or dumbbell?",
        options: [
            "Brachysclereid",
            "Macrosclereid",
            "Osteosclereid",
            "Astrosclereid"
        ],
        correct: 2,
        rationale: "Osteosclereid is a subtype of sclereids that is cylindrical and shaped like a bone or dumbbell."
    },
    {
        id: 45,
        subject: "biology",
        question: "What subtype of sclereids features star-like branching structures?",
        options: [
            "Astrosclereid",
            "Filliform sclereid",
            "Brachysclereid",
            "Fiber"
        ],
        correct: 0,
        rationale: "Astrosclereid is a subtype of sclereids that features star-like branching structures."
    },

    // Alternative questions for Biology
    {
        id: 101,
        subject: "biology",
        question: "Which tissue system includes the epidermis and serves as the plant's protective outer layer?",
        options: [
            "Vascular tissue system",
            "Ground tissue system",
            "Dermal tissue system",
            "Meristematic system"
        ],
        correct: 2,
        rationale: "The dermal tissue system includes the epidermis and serves as the plant's protective outer layer."
    },
    {
        id: 102,
        subject: "biology",
        question: "Which cells are responsible for photosynthesis in leaves?",
        options: [
            "Sclerenchyma cells",
            "Collenchyma cells",
            "Parenchyma cells in mesophyll",
            "Guard cells"
        ],
        correct: 2,
        rationale: "Parenchyma cells in the leaf mesophyll are responsible for photosynthesis."
    },
    {
        id: 103,
        subject: "biology",
        question: "What is the main difference between collenchyma and sclerenchyma cells?",
        options: [
            "Collenchyma is dead at maturity, sclerenchyma is living",
            "Collenchyma provides flexible support, sclerenchyma provides rigid support",
            "Collenchyma transports water, sclerenchyma transports food",
            "There is no difference"
        ],
        correct: 1,
        rationale: "Collenchyma provides flexible support for growing parts, while sclerenchyma provides rigid support for non-growing parts."
    },
    {
        id: 104,
        subject: "biology",
        question: "Which meristem is responsible for the thickening of tree trunks?",
        options: [
            "Apical meristem",
            "Lateral meristem (vascular cambium)",
            "Intercalary meristem",
            "Root apical meristem"
        ],
        correct: 1,
        rationale: "The lateral meristem (vascular cambium) is responsible for the thickening or secondary growth of tree trunks."
    },
    {
        id: 105,
        subject: "biology",
        question: "What is the function of sieve tubes in phloem?",
        options: [
            "Transport water upward",
            "Transport sugars and organic nutrients",
            "Provide structural support",
            "Protect the plant from pathogens"
        ],
        correct: 1,
        rationale: "Sieve tubes in phloem transport sugars and organic nutrients throughout the plant."
    }
];

// Effective Communication Questions - Second Term First Summative
const effectiveCommQuestions = [
    // I. Academic Texts vs Technical Texts (Questions 1-6)
    {
        id: 1,
        subject: "effective-comm",
        question: "Which type of text presents ideas, arguments, interpretations, or research findings?",
        options: [
            "Technical text",
            "Academic text",
            "Instructional manual",
            "Memorandum"
        ],
        correct: 1,
        rationale: "Academic texts present ideas, arguments, interpretations, or research findings through scholarly writing."
    },
    {
        id: 2,
        subject: "effective-comm",
        question: "What is the main purpose of a technical text?",
        options: [
            "To entertain readers with fictional stories",
            "To express personal feelings",
            "To instruct, guide, or communicate technical information",
            "To present unsupported opinions"
        ],
        correct: 2,
        rationale: "Technical texts are designed to instruct, guide, or communicate technical information clearly and precisely."
    },
    {
        id: 3,
        subject: "effective-comm",
        question: "Which of the following is an example of an academic text?",
        options: [
            "Research paper",
            "User guide",
            "Instructional manual",
            "Operating instructions"
        ],
        correct: 0,
        rationale: "A research paper is an academic text that presents scholarly analysis, research findings, and arguments."
    },
    {
        id: 4,
        subject: "effective-comm",
        question: "Which feature is most commonly associated with technical texts?",
        options: [
            "Emotional language",
            "Unsupported arguments",
            "Creative storytelling",
            "Clear and precise instructions"
        ],
        correct: 3,
        rationale: "Technical texts emphasize clear and precise instructions to help users perform tasks accurately."
    },
    {
        id: 5,
        subject: "effective-comm",
        question: "A student writes a paper analyzing the effects of AI on education using research evidence. What type of text is it?",
        options: [
            "Technical report",
            "Academic text",
            "Instructional manual",
            "System user guide"
        ],
        correct: 1,
        rationale: "An academic text presents analysis and interpretation supported by research evidence."
    },
    {
        id: 6,
        subject: "effective-comm",
        question: "A document explains how to operate an AI learning platform step by step. What type of text is it?",
        options: [
            "Position paper",
            "Book review",
            "Technical text",
            "Academic essay"
        ],
        correct: 2,
        rationale: "A technical text provides step-by-step instructions for operating equipment or systems."
    },
    // II. Types of Texts (Questions 7-14)
    {
        id: 7,
        subject: "effective-comm",
        question: "Which text presents a systematic investigation of a problem or question?",
        options: [
            "Research paper",
            "Memorandum",
            "Book review",
            "Instructional manual"
        ],
        correct: 0,
        rationale: "A research paper presents a systematic investigation through methodology, findings, and conclusions."
    },
    {
        id: 8,
        subject: "effective-comm",
        question: "Which text states a clear position on an issue and supports it with evidence and logical arguments?",
        options: [
            "Abstract",
            "Technical report",
            "Academic essay",
            "Position paper"
        ],
        correct: 3,
        rationale: "A position paper states a clear stance on an issue and supports it with evidence and logical arguments."
    },
    {
        id: 9,
        subject: "effective-comm",
        question: "What is a brief overview of a research study that summarizes its problem, methods, findings, and conclusions?",
        options: [
            "Memorandum",
            "Abstract",
            "Book review",
            "Technical report"
        ],
        correct: 1,
        rationale: "An abstract provides a concise summary of a research study's key components."
    },
    {
        id: 10,
        subject: "effective-comm",
        question: "Which text evaluates a book's content, themes, strengths, weaknesses, and significance?",
        options: [
            "Research paper",
            "Position paper",
            "Book review",
            "Abstract"
        ],
        correct: 2,
        rationale: "A book review critically evaluates a book's content, themes, strengths, weaknesses, and significance."
    },
    {
        id: 11,
        subject: "effective-comm",
        question: "Which text presents technical information, findings, analysis, and conclusions related to a project or investigation?",
        options: [
            "Technical report",
            "Academic essay",
            "Memorandum",
            "Book review"
        ],
        correct: 0,
        rationale: "A technical report presents technical information, findings, analysis, and conclusions about a project."
    },
    {
        id: 12,
        subject: "effective-comm",
        question: "Which type of text develops a central idea through an introduction, body, and conclusion?",
        options: [
            "Abstract",
            "Instructional manual",
            "Technical report",
            "Academic essay"
        ],
        correct: 3,
        rationale: "An academic essay develops a central idea through introduction, body, and conclusion structure."
    },
    {
        id: 13,
        subject: "effective-comm",
        question: "What is a concise, professional written message used for official internal communication?",
        options: [
            "Position paper",
            "Memorandum",
            "Research paper",
            "Book review"
        ],
        correct: 1,
        rationale: "A memorandum is a concise, professional message for official internal communication."
    },
    {
        id: 14,
        subject: "effective-comm",
        question: "Which text provides directions for operating equipment, using a system, or completing a task?",
        options: [
            "Abstract",
            "Academic essay",
            "Instructional manual",
            "Position paper"
        ],
        correct: 2,
        rationale: "An instructional manual provides step-by-step directions for operating equipment or completing tasks."
    },

    // III. Characteristics of Effective Technical Writing (Questions 15-20)
    {
        id: 15,
        subject: "effective-comm",
        question: "Which characteristic ensures that instructions are easy to understand?",
        options: [
            "Clarity",
            "Precision",
            "Accuracy",
            "Organization"
        ],
        correct: 0,
        rationale: "Clarity ensures that instructions are easy to understand and follow."
    },
    {
        id: 16,
        subject: "effective-comm",
        question: "Which characteristic requires information to be exact and measurable whenever necessary?",
        options: [
            "Context",
            "Engagement",
            "Expression",
            "Precision"
        ],
        correct: 3,
        rationale: "Precision requires information to be exact and measurable for accuracy."
    },
    {
        id: 17,
        subject: "effective-comm",
        question: "Why is accuracy important in technical writing?",
        options: [
            "It makes the text more entertaining.",
            "It ensures that technical information is correct and reliable.",
            "It allows writers to use complicated words.",
            "It makes instructions longer."
        ],
        correct: 1,
        rationale: "Accuracy ensures technical information is correct and reliable for safe and effective use."
    },
    {
        id: 18,
        subject: "effective-comm",
        question: "Why should instructions follow a logical sequence?",
        options: [
            "To make the text more emotional",
            "To add unnecessary information",
            "To ensure steps are presented in the correct order",
            "To make the text more difficult to understand"
        ],
        correct: 2,
        rationale: "Logical sequence ensures steps are presented in the correct order for successful completion."
    },
    {
        id: 19,
        subject: "effective-comm",
        question: "What should a writer do when using unfamiliar technical terms for beginners?",
        options: [
            "Explain the unfamiliar terms.",
            "Remove all explanations.",
            "Use more complicated vocabulary.",
            "Assume everyone understands the terms."
        ],
        correct: 0,
        rationale: "Writers should explain unfamiliar technical terms to help beginners understand."
    },
    {
        id: 20,
        subject: "effective-comm",
        question: "Which instruction demonstrates precision?",
        options: [
            "Heat the solution for a while.",
            "Add enough water until it looks right.",
            "Mix the ingredients as needed.",
            "Heat the solution at 80°C for five minutes."
        ],
        correct: 3,
        rationale: "Precision uses exact measurements and time: '80°C for five minutes' is specific and measurable."
    },

    // IV. Audience, Purpose, and Context (Questions 21-25)
    {
        id: 21,
        subject: "effective-comm",
        question: "Who refers to the intended readers or listeners of a message?",
        options: [
            "Purpose",
            "Audience",
            "Context",
            "Evidence"
        ],
        correct: 1,
        rationale: "Audience refers to the intended readers or listeners of a message."
    },
    {
        id: 22,
        subject: "effective-comm",
        question: "Which question does purpose answer?",
        options: [
            "Who will receive the message?",
            "Where did the communication happen?",
            "Why is the message being communicated?",
            "What is the reader's background?"
        ],
        correct: 2,
        rationale: "Purpose answers the question 'Why is the message being communicated?'"
    },
    {
        id: 23,
        subject: "effective-comm",
        question: "What does context refer to?",
        options: [
            "The circumstances and situation surrounding communication",
            "The intended readers of a message",
            "The reason for writing a text",
            "The grammatical structure of a sentence"
        ],
        correct: 0,
        rationale: "Context refers to the circumstances and situation surrounding communication."
    },
    {
        id: 24,
        subject: "effective-comm",
        question: "A student creates a cyberbullying awareness poster for younger students using simple words and relatable examples. What is the student primarily adapting to?",
        options: [
            "Research findings",
            "Technical vocabulary",
            "The conclusion",
            "The audience"
        ],
        correct: 3,
        rationale: "The student is adapting to the audience by using simple words and relatable examples for younger students."
    },
    {
        id: 25,
        subject: "effective-comm",
        question: "A student writes a formal proposal for school administrators using evidence and recommended policies. Which approach is most appropriate?",
        options: [
            "Casual language and jokes",
            "Formal language, evidence, and recommendations",
            "Unverified claims and personal attacks",
            "Slang and unrelated stories"
        ],
        correct: 1,
        rationale: "Formal proposals for administrators require formal language, evidence, and recommendations."
    },

    // V. Multimodal Communication (Questions 26-31)
    {
        id: 26,
        subject: "effective-comm",
        question: "What is multimodal communication?",
        options: [
            "Communicating only through written words",
            "Using only pictures to communicate",
            "Combining two or more modes to communicate meaning",
            "Communicating without a clear purpose"
        ],
        correct: 2,
        rationale: "Multimodal communication combines two or more modes (linguistic, visual, audio, gestural, spatial) to communicate meaning."
    },
    {
        id: 27,
        subject: "effective-comm",
        question: "Which mode includes words, sentences, written explanations, and spoken language?",
        options: [
            "Linguistic",
            "Visual",
            "Audio",
            "Spatial"
        ],
        correct: 0,
        rationale: "Linguistic mode includes words, sentences, written explanations, and spoken language."
    },
    {
        id: 28,
        subject: "effective-comm",
        question: "Which mode includes photographs, illustrations, icons, diagrams, and colors?",
        options: [
            "Gestural",
            "Linguistic",
            "Spatial",
            "Visual"
        ],
        correct: 3,
        rationale: "Visual mode includes photographs, illustrations, icons, diagrams, and colors."
    },
    {
        id: 29,
        subject: "effective-comm",
        question: "Which mode includes narration, music, and sound effects?",
        options: [
            "Visual",
            "Audio",
            "Gestural",
            "Linguistic"
        ],
        correct: 1,
        rationale: "Audio mode includes narration, music, and sound effects."
    },
    {
        id: 30,
        subject: "effective-comm",
        question: "Facial expressions, body movements, and hand gestures belong to which mode?",
        options: [
            "Spatial",
            "Audio",
            "Gestural",
            "Visual"
        ],
        correct: 2,
        rationale: "Gestural mode includes facial expressions, body movements, and hand gestures."
    },
    {
        id: 31,
        subject: "effective-comm",
        question: "The arrangement, placement, and organization of elements belong to which mode?",
        options: [
            "Spatial",
            "Linguistic",
            "Audio",
            "Gestural"
        ],
        correct: 0,
        rationale: "Spatial mode includes the arrangement, placement, and organization of elements."
    },

    // VI. Interpretation, Engagement, and Expression (Questions 32-36)
    {
        id: 32,
        subject: "effective-comm",
        question: "What should you do when interpreting a multimodal text?",
        options: [
            "Focus only on its colors.",
            "Ignore the captions and images.",
            "Judge the text based only on its appearance.",
            "Examine the words, visuals, data, audience, purpose, and relationships between elements."
        ],
        correct: 3,
        rationale: "Interpreting multimodal texts requires examining words, visuals, data, audience, purpose, and relationships between elements."
    },
    {
        id: 33,
        subject: "effective-comm",
        question: "What involves understanding and explaining a text's meaning by examining its claims, evidence, purpose, audience, and context?",
        options: [
            "Expression",
            "Interpretation",
            "Engagement",
            "Organization"
        ],
        correct: 1,
        rationale: "Interpretation involves understanding and explaining a text's meaning by examining claims, evidence, purpose, audience, and context."
    },
    {
        id: 34,
        subject: "effective-comm",
        question: "What involves actively interacting with ideas by asking questions, discussing implications, and evaluating information?",
        options: [
            "Interpretation",
            "Expression",
            "Engagement",
            "Precision"
        ],
        correct: 2,
        rationale: "Engagement involves actively interacting with ideas by asking questions, discussing implications, and evaluating information."
    },
    {
        id: 35,
        subject: "effective-comm",
        question: "What refers to communicating one's own thoughts, interpretations, opinions, and ideas effectively?",
        options: [
            "Expression",
            "Context",
            "Interpretation",
            "Engagement"
        ],
        correct: 0,
        rationale: "Expression refers to communicating one's own thoughts, interpretations, opinions, and ideas effectively."
    },
    {
        id: 36,
        subject: "effective-comm",
        question: "A student analyzes an editorial's arguments and supporting evidence to understand its message. Which process is demonstrated?",
        options: [
            "Engagement",
            "Expression",
            "Precision",
            "Interpretation"
        ],
        correct: 3,
        rationale: "Analyzing arguments and evidence to understand a message demonstrates interpretation."
    },

    // VII. Critical Thinking and Credible Evidence (Questions 37-41)
    {
        id: 37,
        subject: "effective-comm",
        question: "What should you do first when evaluating information from an online source?",
        options: [
            "Count its likes and reposts.",
            "Verify whether the source is credible and relevant.",
            "Accept the claim immediately.",
            "Share it with friends."
        ],
        correct: 1,
        rationale: "First verify whether the source is credible and relevant before accepting or sharing information."
    },
    {
        id: 38,
        subject: "effective-comm",
        question: "What should you examine to determine whether a claim is trustworthy?",
        options: [
            "The number of emojis used",
            "The attractiveness of the graphics",
            "Reliable data, research findings, and supporting details",
            "The popularity of the person posting it"
        ],
        correct: 2,
        rationale: "Examine reliable data, research findings, and supporting details to determine if a claim is trustworthy."
    },
    {
        id: 39,
        subject: "effective-comm",
        question: "A claim presents evidence that does not actually support its conclusion. What should a critical thinker do?",
        options: [
            "Analyze whether the evidence supports the claim.",
            "Accept the conclusion without question.",
            "Ignore the evidence.",
            "Share the claim immediately."
        ],
        correct: 0,
        rationale: "A critical thinker analyzes whether the evidence actually supports the claim."
    },
    {
        id: 40,
        subject: "effective-comm",
        question: "Why should you consider alternative explanations when evaluating information?",
        options: [
            "To make your opinion impossible to change",
            "To ignore evidence that disagrees with you",
            "To prove that your first opinion is always correct",
            "To avoid accepting only information that supports your initial opinion"
        ],
        correct: 3,
        rationale: "Considering alternative explanations helps avoid confirmation bias and leads to more balanced conclusions."
    },
    {
        id: 41,
        subject: "effective-comm",
        question: "What does it mean to interpret results carefully?",
        options: [
            "Make conclusions based on personal feelings.",
            "Avoid conclusions that go beyond what the evidence shows.",
            "Accept every online claim as factual.",
            "Ignore limitations in the evidence."
        ],
        correct: 1,
        rationale: "Interpreting results carefully means avoiding conclusions that go beyond what the evidence supports."
    },

    // VIII. Organization, Tone, and Language (Questions 42-45)
    {
        id: 42,
        subject: "effective-comm",
        question: "Which part of an academic text introduces the topic and central idea?",
        options: [
            "Body",
            "Conclusion",
            "Introduction",
            "References"
        ],
        correct: 2,
        rationale: "The introduction introduces the topic and central idea of an academic text."
    },
    {
        id: 43,
        subject: "effective-comm",
        question: "Which part develops supporting ideas, arguments, and evidence?",
        options: [
            "Body",
            "Introduction",
            "Conclusion",
            "Title"
        ],
        correct: 0,
        rationale: "The body develops supporting ideas, arguments, and evidence."
    },
    {
        id: 44,
        subject: "effective-comm",
        question: "Which tone is most appropriate for a memorandum sent to teachers announcing a schedule change?",
        options: [
            "Sarcastic and emotional",
            "Casual and disrespectful",
            "Dramatic and humorous",
            "Concise, polite, and professional"
        ],
        correct: 3,
        rationale: "Professional communication requires a concise, polite, and professional tone."
    },
    {
        id: 45,
        subject: "effective-comm",
        question: "When adapting a research report into a social media campaign, what must remain accurate?",
        options: [
            "Only the original report's formatting",
            "The evidence and meaning of the findings",
            "The length of every paragraph",
            "The exact arrangement of every section"
        ],
        correct: 1,
        rationale: "When adapting content, the evidence and meaning of findings must remain accurate, even if format changes."
    },

    // Alternative questions for Effective Communication
    {
        id: 101,
        subject: "effective-comm",
        question: "A writer uses simple language and short sentences when explaining a complex topic to beginners. Which characteristic of effective writing does this demonstrate?",
        options: [
            "Clarity",
            "Precision",
            "Accuracy",
            "Complexity"
        ],
        correct: 0,
        rationale: "Using simple language and short sentences demonstrates clarity, making information easy to understand."
    },
    {
        id: 102,
        subject: "effective-comm",
        question: "A technical document specifies '15 minutes at 200°C' instead of 'cook for a bit.' Which characteristic does this show?",
        options: [
            "Vagueness",
            "Precision",
            "Emotion",
            "Creativity"
        ],
        correct: 1,
        rationale: "Specifying exact time and temperature demonstrates precision in technical writing."
    },
    {
        id: 103,
        subject: "effective-comm",
        question: "When writing for an audience of medical professionals, a writer uses specialized terminology. When writing for general readers, the writer explains those terms. What is the writer adapting to?",
        options: [
            "The writer's personal preference",
            "The audience's knowledge level",
            "The length of the document",
            "The formatting requirements"
        ],
        correct: 1,
        rationale: "The writer is adapting to the audience's knowledge level."
    },
    {
        id: 104,
        subject: "effective-comm",
        question: "A social media post uses emojis, hashtags, and images along with text. How many modes of communication are being used?",
        options: [
            "One mode only",
            "Two modes",
            "Three modes",
            "Four modes"
        ],
        correct: 2,
        rationale: "Three modes are used: linguistic (text), visual (images), and spatial (arrangement of elements)."
    },
    {
        id: 105,
        subject: "effective-comm",
        question: "When evaluating a viral news story, a student checks the source, date, and supporting evidence. What skill is the student demonstrating?",
        options: [
            "Blind acceptance",
            "Critical thinking",
            "Emotional reaction",
            "Rapid sharing"
        ],
        correct: 1,
        rationale: "Checking source, date, and evidence demonstrates critical thinking and information evaluation."
    }
];

// Mabisang Komunikasyon Questions - Second Term First Summative
const komunikasyonQuestions = [
    // I. Mga Uri ng Paglalahad (Questions 1-6)
    {
        id: 1,
        subject: "komunikasyon",
        question: "Anong uri ng paglalahad ay nagpapakita ng espesyalisadong impormasyon at paglalahad sa mga komplikadong proseso?",
        options: [
            "Dyornalistik na Pagsulat",
            "Teknikal na Paglalahad",
            "Malikhaing Pagsulat",
            "Propesyonal na Pagsulat"
        ],
        correct: 1,
        rationale: "Teknikal na Paglalahad ay nagpapakita ng espesyalisadong impormasyon at paglalahad sa mga komplikadong proseso."
    },
    {
        id: 2,
        subject: "komunikasyon",
        question: "Aling uri ng paglalahad ay tumutukoy sa mga sanggunian o pinagkukunan ng datos?",
        options: [
            "Referensyal na Paglalahad",
            "Teknikal na Paglalahad",
            "Akademikong Pagsulat",
            "Malikhaing Pagsulat"
        ],
        correct: 0,
        rationale: "Referensyal na Paglalahad ay tumutukoy sa mga sanggunian o pinagkukunan ng datos."
    },
    {
        id: 3,
        subject: "komunikasyon",
        question: "Anong uri ng pagsulat ay tumutukoy sa pamamahayag o pagbabalita?",
        options: [
            "Dyornalistik na Pagsulat",
            "Propesyonal na Pagsulat",
            "Malikhaing Pagsulat",
            "Akademikong Pagsulat"
        ],
        correct: 0,
        rationale: "Dyornalistik na Pagsulat ay tumutukoy sa pamamahayag o pagbabalita."
    },
    {
        id: 4,
        subject: "komunikasyon",
        question: "Aling uri ng pagsulat ay intelektuwal na sulating ginagamit sa paaralan, tesis, at pagsusuri ng datos?",
        options: [
            "Malikhaing Pagsulat",
            "Propesyonal na Pagsulat",
            "Akademikong Pagsulat",
            "Dyornalistik na Pagsulat"
        ],
        correct: 2,
        rationale: "Akademikong Pagsulat ay intelektuwal na sulating ginagamit sa paaralan, tesis, at pagsusuri ng datos at kalidad ng kaalaman."
    },
    {
        id: 5,
        subject: "komunikasyon",
        question: "Anong uri ng pagsulat ay nagpapakita ng masining na pagpapahayag, imahinasyon, at damdamin ng mga mambabasa?",
        options: [
            "Akademikong Pagsulat",
            "Malikhaing Pagsulat",
            "Propesyonal na Pagsulat",
            "Referensyal na Paglalahad"
        ],
        correct: 1,
        rationale: "Malikhaing Pagsulat ay masining na pagpapahayag na nagpapakita ng imahinasyon at damdamin ng mga mambabasa."
    },
    {
        id: 6,
        subject: "komunikasyon",
        question: "Aling uri ng pagsulat ay pormal na komunikasyon na may eksklusibo o direksiyong kailangang sundin sa isang tiyak na larangan ng trabaho?",
        options: [
            "Dyornalistik na Pagsulat",
            "Propesyonal na Pagsulat",
            "Malikhaing Pagsulat",
            "Referensyal na Paglalahad"
        ],
        correct: 1,
        rationale: "Propesyonal na Pagsulat ay pormal na komunikasyon na may direksiyong kailangang sundin sa isang tiyak na larangan ng trabaho."
    },

    // II. Katangian at Proseso ng Pagsulat (Questions 7-15)
    {
        id: 7,
        subject: "komunikasyon",
        question: "Ano ang pangunahing katangian ng isang mabuting pagsulat ukol sa personal na opinyon?",
        options: [
            "Hindi personal sa opinyon; dapat may batayan o ebidensya",
            "Dapat laging nakabatay sa damdamin",
            "Hindi kailangan ng ebidensya",
            "Dapat hindi direkta"
        ],
        correct: 0,
        rationale: "Ang mabuting pagsulat ay hindi personal sa opinyon at dapat may batayan o ebidensya."
    },
    {
        id: 8,
        subject: "komunikasyon",
        question: "Alin sa mga sumusunod ang hindi katangian ng mabuting pagsulat?",
        options: [
            "Direkta",
            "Nakabatay sa katotohanan",
            "Batay sa karanasan",
            "Nakabatay lamang sa hinuha"
        ],
        correct: 3,
        rationale: "Ang mabuting pagsulat ay direkta, nakabatay sa katotohanan, at batay sa karanasan, hindi sa hinuha lamang."
    },
    {
        id: 9,
        subject: "komunikasyon",
        question: "Ano ang unang hakbang sa proseso ng pagsulat?",
        options: [
            "Pagsusulat",
            "Pagrebisa",
            "Pagpaplano",
            "Balangkas"
        ],
        correct: 2,
        rationale: "Ang unang hakbang sa proseso ng pagsulat ay Pagpaplano kung saan kinikilala ang objectives, context, at layunin."
    },
    {
        id: 10,
        subject: "komunikasyon",
        question: "Sa pagpaplano, ano ang dapat unang tukuyin?",
        options: [
            "Ang mga salitang gagamitin",
            "Ang layunin at konteksto",
            "Ang haba ng dokumento",
            "Ang format ng pagsulat"
        ],
        correct: 1,
        rationale: "Sa pagpaplano, dapat unang tukuyin ang layunin at konteksto ng pagsulat."
    },
    {
        id: 11,
        subject: "komunikasyon",
        question: "Anong bahagi ng proseso ang kabilang ang panimula, katawan, at pag-uugnay?",
        options: [
            "Pagpaplano",
            "Balangkas",
            "Pagsusulat",
            "Pagrebisa"
        ],
        correct: 1,
        rationale: "Ang Balangkas ay binubuo ng panimula, katawan, at pag-uugnay."
    },
    {
        id: 12,
        subject: "komunikasyon",
        question: "Alin sa mga sumusunod ay isang paraan ng pagsulat?",
        options: [
            "Pagbibigay-depinisyon",
            "Pagtulog",
            "Pagkain",
            "Paglalaro"
        ],
        correct: 0,
        rationale: "Ang Pagbibigay-depinisyon ay isa sa mga paraan ng pagsulat."
    },
    {
        id: 13,
        subject: "komunikasyon",
        question: "Ano ang ibig sabihin ng enumerasyon bilang paraan ng pagsulat?",
        options: [
            "Pagbibigay ng kahulugan",
            "Pagtatala ng mga item o puntos",
            "Pagsulat ng kwento",
            "Pagsulat ng tula"
        ],
        correct: 1,
        rationale: "Ang enumerasyon ay pagtatala ng mga item o puntos."
    },
    {
        id: 14,
        subject: "komunikasyon",
        question: "Alin sa mga sumusunod ay isang paraan na nagpapakita ng sanhi at bunga?",
        options: [
            "Direktang sipi",
            "Paraphrasing",
            "Sanhi at bunga",
            "Lagom"
        ],
        correct: 2,
        rationale: "Ang Sanhi at bunga ay isang paraan na nagpapakita ng ugat at resulta ng isang pangyayari."
    },
    {
        id: 15,
        subject: "komunikasyon",
        question: "Ano ang ibig sabihin ng paraphrasing?",
        options: [
            "Kopyahin nang eksakto ang mga salita",
            "Sabihin nang sariling mga salita ang ibig sabihin",
            "Maglagay ng tala",
            "Magsumite ng buod"
        ],
        correct: 1,
        rationale: "Ang paraphrasing ay pagsasabi ng ibig sabihin nang sariling mga salita."
    },

    // III. Akademikong Pagsulat (Questions 16-20)
    {
        id: 16,
        subject: "komunikasyon",
        question: "Ano ang kahulugan ng Akademikong Pagsulat?",
        options: [
            "Pormal na uri ng pagsulat na gumagamit ng mataas na antas ng wika",
            "Impormal na uri ng pagsulat",
            "Pagsulat na gumagamit ng balbal",
            "Pagsulat na wala istruktura"
        ],
        correct: 0,
        rationale: "Akademikong Pagsulat ay pormal na uri ng pagsulat na gumagamit ng mataas na antas ng wika at may sinusunod na istruktura."
    },
    {
        id: 17,
        subject: "komunikasyon",
        question: "Ano ang pangunahing katangian ng Akademikong Pagsulat ukol sa wika?",
        options: [
            "Pormal: Hindi gumagamit ng kolokyal o balbal na salita",
            "Impormal: Gumagamit ng sleng",
            "Kolokyal: Gumagamit ng pang-araw-araw na salita",
            "Balbal: Gumagamit ng impormal na salita"
        ],
        correct: 0,
        rationale: "Ang Akademikong Pagsulat ay pormal at hindi gumagamit ng kolokyal o balbal na salita."
    },
    {
        id: 18,
        subject: "komunikasyon",
        question: "Bakit mahalaga ang pananagutan sa Akademikong Pagsulat?",
        options: [
            "Kinikilala ang mga pinagkunan ng impormasyon (citation/bibliograpiya)",
            "Hindi na kailangan ng mga pinagkunan",
            "Pinapayagan ang pag-plagiarism",
            "Hindi mahalaga"
        ],
        correct: 0,
        rationale: "Ang pananagutan ay mahalaga dahil kinikilala ang mga pinagkunan ng impormasyon sa pamamagitan ng citation at bibliograpiya."
    },
    {
        id: 19,
        subject: "komunikasyon",
        question: "Ano ang ibig sabihin na 'obhetibo' sa Akademikong Pagsulat?",
        options: [
            "Nakabatay sa personal na opinyon lamang",
            "Nakabatay sa katotohanan (facts) at hindi sa personal na opinyon lamang",
            "Nakabatay sa damdamin",
            "Nakabatay sa hinuha"
        ],
        correct: 1,
        rationale: "Ang obhetibo ay nakabatay sa katotohanan at hindi sa personal na opinyon lamang."
    },
    {
        id: 20,
        subject: "komunikasyon",
        question: "Ano ang ibig sabihin na 'malinaw at tumpak' sa Akademikong Pagsulat?",
        options: [
            "Direkta sa punto at may lohikal na organisasyon",
            "Malabo at walang organisasyon",
            "Mahaba at walang punto",
            "Personal at damdamin"
        ],
        correct: 0,
        rationale: "Ang malinaw at tumpak ay direkta sa punto at may lohikal na organisasyon."
    },

    // IV. Panel Discussion (Questions 21-30)
    {
        id: 21,
        subject: "komunikasyon",
        question: "Ano ang Panel Discussion o Talakayang Panel?",
        options: [
            "Pormal na diskusyon kung saan ang mga eksperto ay nag-uusap tungkol sa isang paksa",
            "Impormal na usapan",
            "Debate kung saan nag-aaway ang mga tao",
            "Individual na presentation"
        ],
        correct: 0,
        rationale: "Ang Panel Discussion ay pormal na diskusyon kung saan ang mga eksperto ay nag-uusap tungkol sa isang paksa sa harap ng madla."
    },
    {
        id: 22,
        subject: "komunikasyon",
        question: "Sino ang pinakamahalagang tauhan sa Panel Discussion?",
        options: [
            "Moderator (Tagapamagitan)",
            "Panelists",
            "Audience",
            "Guest"
        ],
        correct: 0,
        rationale: "Ang Moderator ay pinakamahalagang tauhan dahil siya ang nagpapakilala, nagtatanong, at nagpapanatili ng kaayusan."
    },
    {
        id: 23,
        subject: "komunikasyon",
        question: "Ano ang papel ng Moderator sa Panel Discussion?",
        options: [
            "Nagpapakilala sa mga panelists, nagtatanong, nagpapanatili ng kaayusan, at naglalagom",
            "Tumutugot lamang sa tanong",
            "Hindi nagsasalita",
            "Nag-aaway sa panelists"
        ],
        correct: 0,
        rationale: "Ang Moderator ay nagpapakilala sa mga panelists, nagtatanong, nagpapanatili ng kaayusan, at naglalagom ng napag-usapan."
    },
    {
        id: 24,
        subject: "komunikasyon",
        question: "Sino ang mga Panelists sa Panel Discussion?",
        options: [
            "Mga taong may malalim na kaalaman sa paksa na sumasagot sa mga tanong",
            "Mga ordinaryong tao",
            "Mga bata",
            "Mga bisita"
        ],
        correct: 0,
        rationale: "Ang mga Panelists ay mga taong may malalim na kaalaman sa paksa na sumasagot sa mga tanong."
    },
    {
        id: 25,
        subject: "komunikasyon",
        question: "Ilang Panelists ang karaniwang binubuo ng isang Panel Discussion?",
        options: [
            "3 hanggang 5 katao",
            "1 tao lamang",
            "10 katao",
            "20 katao"
        ],
        correct: 0,
        rationale: "Karaniwang binubuo ng 3 hanggang 5 katao ang mga Panelists sa isang Panel Discussion."
    },
    {
        id: 26,
        subject: "komunikasyon",
        question: "Sino ang Audience sa Panel Discussion?",
        options: [
            "Mga nakikinig na maaaring ding magtanong sa huling bahagi",
            "Mga Panelists",
            "Moderator",
            "Host"
        ],
        correct: 0,
        rationale: "Ang Audience ay mga nakikinig na maaaring ding magtanong sa huling bahagi ng talakayan (Q&A session)."
    },
    {
        id: 27,
        subject: "komunikasyon",
        question: "Ano ang layunin ng Panel Discussion?",
        options: [
            "Magbigay ng iba't ibang pananaw at malalim na impormasyon ukol sa isang isyu",
            "Mag-away ang mga panelists",
            "Mag-entertain lamang",
            "Magpersonal na opinyon"
        ],
        correct: 0,
        rationale: "Ang layunin ng Panel Discussion ay magbigay ng iba't ibang pananaw at malalim na impormasyon ukol sa isang isyu."
    },
    {
        id: 28,
        subject: "komunikasyon",
        question: "Ano ang nangyayari sa Q&A session ng Panel Discussion?",
        options: [
            "Ang audience ay pwedeng magtanong sa mga panelists",
            "Nag-aaway ang mga panelists",
            "Umalis ang audience",
            "Wala nang nangyayari"
        ],
        correct: 0,
        rationale: "Sa Q&A session, ang audience ay pwedeng magtanong sa mga panelists."
    },
    {
        id: 29,
        subject: "komunikasyon",
        question: "Paano naiiba ang Panel Discussion sa Debate?",
        options: [
            "Sa Panel Discussion, hindi nag-aaway o nagtatalo ang mga panelists; nagtutulungan silang magbahagi ng kaalaman",
            "Sa Panel Discussion, nag-aaway ang mga panelists",
            "Sa Debate, nagtutulungan ang mga participants",
            "Walang pagkakaiba"
        ],
        correct: 0,
        rationale: "Sa Panel Discussion, hindi nag-aaway o nagtatalo ang mga panelists; nagtutulungan silang magbahagi ng kaalaman at magbigay-linaw."
    },
    {
        id: 30,
        subject: "komunikasyon",
        question: "Bakit itinuturing na impormatibong aktibidad ang Panel Discussion kapag ginagamit sa akademikong konteksto?",
        options: [
            "Dahil ang mga panelists ay nagtutulungan upang magbahagi ng kaalaman at magbigay-linaw sa isang akademikong paksa",
            "Dahil nag-aaway sila",
            "Dahil personal lang ang paksa",
            "Dahil hindi ito pormal"
        ],
        correct: 0,
        rationale: "Ang Panel Discussion ay itinuturing na impormatibong aktibidad dahil ang mga panelists ay nagtutulungan upang magbahagi ng kaalaman at magbigay-linaw sa isang akademikong paksa."
    },

    // V. Impormatibong Pagsulat (Questions 31-45)
    {
        id: 31,
        subject: "komunikasyon",
        question: "Ano ang Impormatibong Pagsulat o Tekstong Impormatibo?",
        options: [
            "Uri ng teksto na naglalayong magbigay ng malinaw, tumpak, at walang kinikilingang impormasyon",
            "Uri ng teksto na nagpapakita ng personal na opinyon",
            "Uri ng teksto na nag-e-entertain",
            "Uri ng teksto na nag-aaway"
        ],
        correct: 0,
        rationale: "Ang Impormatibong Pagsulat ay uri ng teksto na naglalayong magbigay ng malinaw, tumpak, at walang kinikilingang impormasyon."
    },
    {
        id: 32,
        subject: "komunikasyon",
        question: "Ano ang layunin ng Impormatibong Pagsulat?",
        options: [
            "Magpaliwanag at magdagdag ng kaalaman sa mambabasa nang hindi nagpapakita ng personal na pagkiling (bias)",
            "Magpakita ng personal na opinyon",
            "Mag-entertain",
            "Mag-away"
        ],
        correct: 0,
        rationale: "Ang layunin ng Impormatibong Pagsulat ay magpaliwanag at magdagdag ng kaalaman nang hindi nagpapakita ng personal na pagkiling."
    },
    {
        id: 33,
        subject: "komunikasyon",
        question: "Ano ang Paghahambing bilang bahagi ng Impormatibong Pagsulat?",
        options: [
            "Pagpapakita ng pagkakatulad at pagkakaiba",
            "Pagbibigay ng kahulugan",
            "Pagsulat ng kwento",
            "Pagsulat ng tula"
        ],
        correct: 0,
        rationale: "Ang Paghahambing ay pagpapakita ng pagkakatulad at pagkakaiba."
    },
    {
        id: 34,
        subject: "komunikasyon",
        question: "Ano ang Sanhi at Bunga bilang bahagi ng Impormatibong Pagsulat?",
        options: [
            "Pagpapaliwanag kung bakit nangyari ang isang bagay at ano ang naging resulta nito",
            "Pagbibigay ng kahulugan",
            "Pagsulat ng kwento",
            "Pagsulat ng tula"
        ],
        correct: 0,
        rationale: "Ang Sanhi at Bunga ay pagpapaliwanag kung bakit nangyari ang isang bagay at ano ang naging resulta nito."
    },
    {
        id: 35,
        subject: "komunikasyon",
        question: "Ano ang Pagbibigay-depinisyon bilang bahagi ng Impormatibong Pagsulat?",
        options: [
            "Pagpapaliwanag ng kahulugan ng isang partikular na termino o konsepto",
            "Paghahambing",
            "Sanhi at bunga",
            "Pagsusuri"
        ],
        correct: 0,
        rationale: "Ang Pagbibigay-depinisyon ay pagpapaliwanag ng kahulugan ng isang partikular na termino o konsepto."
    },
    {
        id: 36,
        subject: "komunikasyon",
        question: "Ano ang Pagsusuri (Pag-iisa-isa) bilang bahagi ng Impormatibong Pagsulat?",
        options: [
            "Paghihimay-himay ng mga detalye ng isang paksa",
            "Pagbibigay ng kahulugan",
            "Paghahambing",
            "Sanhi at bunga"
        ],
        correct: 0,
        rationale: "Ang Pagsusuri o Pag-iisa-isa ay paghihimay-himay ng mga detalye ng isang paksa."
    },
    {
        id: 37,
        subject: "komunikasyon",
        question: "Bakit mahalaga na walang kinikilingan (bias) ang Impormatibong Pagsulat?",
        options: [
            "Para sa malinaw at makatotohanang impormasyon",
            "Para sa personal na opinyon",
            "Para sa entertainment",
            "Para sa pag-away"
        ],
        correct: 0,
        rationale: "Mahalaga na walang kinikilingan ang Impormatibong Pagsulat para sa malinaw at makatotohanang impormasyon."
    },
    {
        id: 38,
        subject: "komunikasyon",
        question: "Anong uri ng teksto ang isang encyclopedia entry?",
        options: [
            "Impormatibong Pagsulat",
            "Malikhaing Pagsulat",
            "Dyornalistik na Pagsulat",
            "Propesyonal na Pagsulat"
        ],
        correct: 0,
        rationale: "Ang encyclopedia entry ay halimbawa ng Impormatibong Pagsulat dahil nagbibigay ito ng impormasyon nang walang bias."
    },
    {
        id: 39,
        subject: "komunikasyon",
        question: "Anong uri ng teksto ang isang news report?",
        options: [
            "Dyornalistik na Pagsulat",
            "Malikhaing Pagsulat",
            "Akademikong Pagsulat",
            "Propesyonal na Pagsulat"
        ],
        correct: 0,
        rationale: "Ang news report ay halimbawa ng Dyornalistik na Pagsulat dahil ito ay pamamahayag o pagbabalita."
    },
    {
        id: 40,
        subject: "komunikasyon",
        question: "Anong uri ng teksto ang isang business email?",
        options: [
            "Propesyonal na Pagsulat",
            "Malikhaing Pagsulat",
            "Akademikong Pagsulat",
            "Dyornalistik na Pagsulat"
        ],
        correct: 0,
        rationale: "Ang business email ay halimbawa ng Propesyonal na Pagsulat dahil ito ay pormal na komunikasyon sa trabaho."
    },
    {
        id: 41,
        subject: "komunikasyon",
        question: "Anong uri ng teksto ang isang short story?",
        options: [
            "Malikhaing Pagsulat",
            "Akademikong Pagsulat",
            "Dyornalistik na Pagsulat",
            "Propesyonal na Pagsulat"
        ],
        correct: 0,
        rationale: "Ang short story ay halimbawa ng Malikhaing Pagsulat dahil ito ay nagpapakita ng imahinasyon at damdamin."
    },
    {
        id: 42,
        subject: "komunikasyon",
        question: "Anong uri ng teksto ang isang research paper?",
        options: [
            "Akademikong Pagsulat",
            "Malikhaing Pagsulat",
            "Dyornalistik na Pagsulat",
            "Propesyonal na Pagsulat"
        ],
        correct: 0,
        rationale: "Ang research paper ay halimbawa ng Akademikong Pagsulat dahil ito ay intelektuwal na sulating ginagamit sa paaralan at pagsusuri ng datos."
    },
    {
        id: 43,
        subject: "komunikasyon",
        question: "Anong uri ng teksto ang isang user manual?",
        options: [
            "Teknikal na Paglalahad",
            "Malikhaing Pagsulat",
            "Dyornalistik na Pagsulat",
            "Propesyonal na Pagsulat"
        ],
        correct: 0,
        rationale: "Ang user manual ay halimbawa ng Teknikal na Paglalahad dahil ito ay nagpapakita ng espesyalisadong impormasyon sa paggamit ng produkto."
    },
    {
        id: 44,
        subject: "komunikasyon",
        question: "Anong uri ng teksto ang isang bibliography?",
        options: [
            "Referensyal na Paglalahad",
            "Malikhaing Pagsulat",
            "Dyornalistik na Pagsulat",
            "Propesyonal na Pagsulat"
        ],
        correct: 0,
        rationale: "Ang bibliography ay halimbawa ng Referensyal na Paglalahad dahil ito ay mga sanggunian o pinagkukunan ng datos."
    },
    {
        id: 45,
        subject: "komunikasyon",
        question: "Ano ang koneksyon sa pagitan ng Panel Discussion at Impormatibong Pagsulat?",
        options: [
            "Ang Panel Discussion ay isang impormatibong akademikong gawain na nagbibigay ng kaalaman",
            "Wala silang koneksyon",
            "Ang Panel Discussion ay creative writing",
            "Ang Panel Discussion ay dyornalistik"
        ],
        correct: 0,
        rationale: "Ang Panel Discussion ay isang impormatibong akademikong gawain na nagbibigay ng kaalaman at magbigay-linaw sa isang paksa."
    },

    // Alternative questions for Mabisang Komunikasyon
    {
        id: 101,
        subject: "komunikasyon",
        question: "Kung ang isang dokumento ay nagpapakita ng mga hakbang sa pag-install ng software, anong uri ng paglalahad ito?",
        options: [
            "Teknikal na Paglalahad",
            "Dyornalistik na Pagsulat",
            "Malikhaing Pagsulat",
            "Akademikong Pagsulat"
        ],
        correct: 0,
        rationale: "Ang dokumento na nagpapakita ng mga hakbang sa pag-install ay Teknikal na Paglalahad dahil ito ay espesyalisadong impormasyon sa komplikadong proseso."
    },
    {
        id: 102,
        subject: "komunikasyon",
        question: "Kung ang isang artikulo ay naglalayong magpaliwanag ng konsepto ng climate change nang walang personal na opinyon, anong uri ito?",
        options: [
            "Impormatibong Pagsulat",
            "Malikhaing Pagsulat",
            "Dyornalistik na Pagsulat",
            "Propesyonal na Pagsulat"
        ],
        correct: 0,
        rationale: "Ang artikulong nagpapaliwanag ng konsepto nang walang personal na opinyon ay Impormatibong Pagsulat."
    },
    {
        id: 103,
        subject: "komunikasyon",
        question: "Sa isang Panel Discussion tungkol sa mental health, sino ang nagsisiguro na pantay ang pagkakataon ng bawat panelist na magsalita?",
        options: [
            "Moderator",
            "Panelists",
            "Audience",
            "Host"
        ],
        correct: 0,
        rationale: "Ang Moderator ang nagsisiguro na pantay ang pagkakataon ng bawat panelist na magsalita at nagpapanatili ng kaayusan."
    },
    {
        id: 104,
        subject: "komunikasyon",
        question: "Anong paraan ng pagsulat ang gumagamit ng sariling mga salita para sabihin ang ibig sabihin ng isang teksto?",
        options: [
            "Paraphrasing",
            "Direktang sipi",
            "Enumerasyon",
            "Lagom"
        ],
        correct: 0,
        rationale: "Ang Paraphrasing ay paggamit ng sariling mga salita para sabihin ang ibig sabihin ng isang teksto."
    },
    {
        id: 105,
        subject: "komunikasyon",
        question: "Bakit hindi dapat gumamit ng balbal na salita sa Akademikong Pagsulat?",
        options: [
            "Dahil ito ay pormal na uri ng pagsulat na nangangailangan ng mataas na antas ng wika",
            "Dahil okay lang ang balbal",
            "Dahil mas mabuti ang balbal",
            "Dahil wala nang ibang salita"
        ],
        correct: 0,
        rationale: "Ang Akademikong Pagsulat ay pormal na uri ng pagsulat na nangangailangan ng mataas na antas ng wika at hindi gumagamit ng balbal."
    }
];

// Life and Career Questions - Second Term First Summative
const lifeCareerQuestions = [
    // I. Skills (Questions 1-6)
    {
        id: 1,
        subject: "life-career",
        question: "What are skills acquired through formal education and training called?",
        options: [
            "Soft Skills",
            "Hard Skills",
            "Natural Abilities",
            "Hobbies"
        ],
        correct: 1,
        rationale: "Hard Skills are learnable knowledge and abilities acquired through formal education and training."
    },
    {
        id: 2,
        subject: "life-career",
        question: "Which type of skills refers to character traits and interpersonal qualities?",
        options: [
            "Hard Skills",
            "Soft Skills",
            "Technical Skills",
            "Academic Skills"
        ],
        correct: 1,
        rationale: "Soft Skills refer to character traits and interpersonal qualities like communication, teamwork, and adaptability."
    },
    {
        id: 3,
        subject: "life-career",
        question: "Programming, accounting, and foreign language proficiency are examples of which type of skills?",
        options: [
            "Soft Skills",
            "Hard Skills",
            "Natural Abilities",
            "Personality Traits"
        ],
        correct: 1,
        rationale: "Programming, accounting, and foreign language proficiency are learnable hard skills."
    },
    {
        id: 4,
        subject: "life-career",
        question: "Communication, teamwork, and problem-solving are examples of which type of skills?",
        options: [
            "Hard Skills",
            "Soft Skills",
            "Technical Skills",
            "Academic Knowledge"
        ],
        correct: 1,
        rationale: "Communication, teamwork, and problem-solving are soft skills related to character and interpersonal qualities."
    },
    {
        id: 5,
        subject: "life-career",
        question: "Why are both hard skills and soft skills important for career success?",
        options: [
            "Only hard skills matter in the workplace",
            "Only soft skills matter in the workplace",
            "Hard skills get you hired, soft skills help you succeed and advance",
            "Neither is important"
        ],
        correct: 2,
        rationale: "Hard skills qualify you for jobs, while soft skills help you work effectively with others and advance in your career."
    },
    {
        id: 6,
        subject: "life-career",
        question: "Which skill type is typically harder to teach or train?",
        options: [
            "Hard Skills",
            "Soft Skills",
            "Both are equally easy to teach",
            "Neither can be taught"
        ],
        correct: 1,
        rationale: "Soft skills are typically harder to teach as they involve personality, behavior, and interpersonal dynamics."
    },

    // II. Influences (Questions 7-15)
    {
        id: 7,
        subject: "life-career",
        question: "What does 'student influence' refer to in career decision-making?",
        options: [
            "Student's height and weight",
            "Motivating factors and sets of likes and dislikes",
            "Student's family background only",
            "Student's school location"
        ],
        correct: 1,
        rationale: "Student influence refers to motivating factors and the student's personal likes and dislikes that affect career choices."
    },
    {
        id: 8,
        subject: "life-career",
        question: "How can peer pressure affect career choices?",
        options: [
            "Friends can encourage or discourage certain career paths",
            "Friends have no influence on career choices",
            "Peer pressure always leads to bad career decisions",
            "Peer pressure only affects school grades"
        ],
        correct: 0,
        rationale: "Friends can encourage or discourage certain career paths through their opinions and examples."
    },
    {
        id: 9,
        subject: "life-career",
        question: "What are community norms?",
        options: [
            "Individual preferences",
            "Community values and local economic possibilities that may impact career choices",
            "School rules only",
            "Government laws"
        ],
        correct: 1,
        rationale: "Community norms are community values and local economic possibilities that influence career choices."
    },
    {
        id: 10,
        subject: "life-career",
        question: "How does school influence career decisions?",
        options: [
            "School has no influence on career",
            "School performance and experiences can expose students to various fields",
            "School only teaches math and science",
            "School forces students into specific careers"
        ],
        correct: 1,
        rationale: "School performance and experiences expose students to various fields and influence their career interests."
    },
    {
        id: 11,
        subject: "life-career",
        question: "If a community values entrepreneurship, how might this affect career choices?",
        options: [
            "Students will avoid business careers",
            "Students may be more inclined to start their own businesses",
            "Community values never affect career choices",
            "Students will only choose government jobs"
        ],
        correct: 1,
        rationale: "Community values like entrepreneurship can make students more inclined to pursue business careers."
    },
    {
        id: 12,
        subject: "life-career",
        question: "What is a positive effect of peer influence on career choices?",
        options: [
            "Peer pressure always leads to poor decisions",
            "Friends can inspire and motivate each other to pursue meaningful careers",
            "Friends only discourage career ambitions",
            "Peer influence has no positive effects"
        ],
        correct: 1,
        rationale: "Positive peer influence can inspire and motivate students to pursue meaningful careers."
    },
    {
        id: 13,
        subject: "life-career",
        question: "How might a student's personal interests influence their career choice?",
        options: [
            "Personal interests have no effect on career",
            "Students tend to choose careers aligned with their interests and passions",
            "Students always choose careers opposite to their interests",
            "Interests only affect hobbies, not careers"
        ],
        correct: 1,
        rationale: "Students tend to choose careers aligned with their interests and passions."
    },
    {
        id: 14,
        subject: "life-career",
        question: "What role do teachers play in career influence?",
        options: [
            "Teachers have no role in career decisions",
            "Teachers can identify student strengths and suggest suitable career paths",
            "Teachers only teach academic subjects",
            "Teachers discourage career exploration"
        ],
        correct: 1,
        rationale: "Teachers can identify student strengths and suggest suitable career paths based on their observations."
    },
    {
        id: 15,
        subject: "life-career",
        question: "How does family background influence career choices?",
        options: [
            "Family has no influence on career",
            "Family values, traditions, and practical concerns shape career perspectives",
            "Family only influences where you live",
            "Family influence is always negative"
        ],
        correct: 1,
        rationale: "Family values, traditions, and practical concerns shape a student's career perspectives and choices."
    },

    // III. Important Terms (Questions 16-20)
    {
        id: 16,
        subject: "life-career",
        question: "What does 'influence' mean in the context of career planning?",
        options: [
            "To ignore others",
            "To affect or inspire others' decisions and actions",
            "To force someone to do something",
            "To have no effect"
        ],
        correct: 1,
        rationale: "Influence means to affect or inspire others' decisions and actions in a positive or negative way."
    },
    {
        id: 17,
        subject: "life-career",
        question: "What is the definition of 'career'?",
        options: [
            "A temporary job",
            "A profession or occupation undertaken for a significant period of life",
            "A hobby",
            "A school subject"
        ],
        correct: 1,
        rationale: "A career is a profession or occupation undertaken for a significant period of a person's life."
    },
    {
        id: 18,
        subject: "life-career",
        question: "What does 'planning' involve in career development?",
        options: [
            "Doing nothing and waiting",
            "Setting goals and creating strategies to achieve them",
            "Randomly choosing a job",
            "Copying others' choices"
        ],
        correct: 1,
        rationale: "Planning involves setting goals and creating strategies to achieve career objectives."
    },
    {
        id: 19,
        subject: "life-career",
        question: "What does 'social' mean in career contexts?",
        options: [
            "Being alone",
            "Relating to people and interpersonal interactions",
            "Using social media only",
            "Being antisocial"
        ],
        correct: 1,
        rationale: "Social relates to people and interpersonal interactions in career and work environments."
    },
    {
        id: 20,
        subject: "life-career",
        question: "What are family expectations in career planning?",
        options: [
            "Forced career choices",
            "Values, traditions, and practical concerns that families pass down",
            "Ignored by children",
            "Only about money"
        ],
        correct: 1,
        rationale: "Family expectations are values, traditions, and practical concerns that influence career perspectives."
    },

    // IV. Environmental Influence - Job Market Demand (Questions 21-24)
    {
        id: 21,
        subject: "life-career",
        question: "What does job market demand refer to?",
        options: [
            "The availability of jobs in specific industries",
            "The number of schools",
            "The population size",
            "The weather conditions"
        ],
        correct: 0,
        rationale: "Job market demand refers to the availability of jobs in specific industries."
    },
    {
        id: 22,
        subject: "life-career",
        question: "Why is it important to consider job market demand when choosing a career?",
        options: [
            "It's not important",
            "It affects employment opportunities and job security",
            "It only affects salary",
            "It only affects location"
        ],
        correct: 1,
        rationale: "Job market demand affects employment opportunities and job security in chosen careers."
    },
    {
        id: 23,
        subject: "life-career",
        question: "What happens to career opportunities in a declining industry?",
        options: [
            "Opportunities increase",
            "Opportunities decrease and competition becomes more intense",
            "Opportunities stay the same",
            "Only salary decreases"
        ],
        correct: 1,
        rationale: "In declining industries, opportunities decrease and competition becomes more intense."
    },
    {
        id: 24,
        subject: "life-career",
        question: "Which careers are likely growing in job market demand today?",
        options: [
            "Typewriter repair",
            "Technology, healthcare, and renewable energy",
            "Only traditional manufacturing",
            "Only agriculture"
        ],
        correct: 1,
        rationale: "Technology, healthcare, and renewable energy are growing sectors with high job market demand."
    },

    // V. Environmental Influence - Technology and AI (Questions 25-28)
    {
        id: 25,
        subject: "life-career",
        question: "How is technology and AI affecting careers?",
        options: [
            "Technology has no effect on careers",
            "The rise of automation and AI is creating new jobs while changing others",
            "Technology only destroys jobs",
            "AI only affects computer programmers"
        ],
        correct: 1,
        rationale: "Technology and AI are creating new jobs while transforming or eliminating others."
    },
    {
        id: 26,
        subject: "life-career",
        question: "What is a positive impact of AI on careers?",
        options: [
            "AI has no positive impacts",
            "AI creates new job opportunities in tech and data fields",
            "AI only takes jobs away",
            "AI only affects manufacturing"
        ],
        correct: 1,
        rationale: "AI creates new job opportunities in technology, data analysis, and AI-related fields."
    },
    {
        id: 27,
        subject: "life-career",
        question: "How can students prepare for careers affected by AI?",
        options: [
            "Ignore technology completely",
            "Develop adaptability and learn new technologies continuously",
            "Focus only on manual labor",
            "Avoid learning about AI"
        ],
        correct: 1,
        rationale: "Students should develop adaptability and continuously learn new technologies to prepare for AI-affected careers."
    },
    {
        id: 28,
        subject: "life-career",
        question: "Which skills are becoming more important due to AI advancement?",
        options: [
            "Manual repetition skills",
            "Critical thinking, creativity, and emotional intelligence",
            "Only memorization",
            "Only physical strength"
        ],
        correct: 1,
        rationale: "Critical thinking, creativity, and emotional intelligence are becoming more important as AI handles routine tasks."
    },

    // VI. Environmental Influence - Globalization (Questions 29-32)
    {
        id: 29,
        subject: "life-career",
        question: "What is globalization in the context of careers?",
        options: [
            "Staying in one country forever",
            "The integration of economies and societies means careers are no longer limited to local opportunities",
            "Only international trade",
            "Only tourism"
        ],
        correct: 1,
        rationale: "Globalization means careers are no longer limited to local opportunities due to economic and social integration."
    },
    {
        id: 30,
        subject: "life-career",
        question: "How does globalization create career opportunities?",
        options: [
            "It doesn't create opportunities",
            "It allows professionals to work for international companies and remote positions",
            "It only benefits large corporations",
            "It only affects developed countries"
        ],
        correct: 1,
        rationale: "Globalization allows professionals to work for international companies and access remote positions worldwide."
    },
    {
        id: 31,
        subject: "life-career",
        question: "What skill becomes more important in a globalized job market?",
        options: [
            "Local dialect only",
            "Cross-cultural communication and language skills",
            "Only technical skills",
            "Only manual skills"
        ],
        correct: 1,
        rationale: "Cross-cultural communication and language skills become important in a globalized job market."
    },
    {
        id: 32,
        subject: "life-career",
        question: "How does globalization increase competition?",
        options: [
            "It decreases competition",
            "Professionals now compete globally, not just locally",
            "Competition stays the same",
            "Only local competition exists"
        ],
        correct: 1,
        rationale: "Globalization means professionals compete globally, not just locally, increasing competition."
    },

    // VII. Environmental Influence - Global Issues (Questions 33-36)
    {
        id: 33,
        subject: "life-career",
        question: "How do global issues like environmental crises influence career demand?",
        options: [
            "They have no effect on careers",
            "They create demand for careers in sustainability, renewable energy, and environmental protection",
            "They only destroy jobs",
            "They only affect scientists"
        ],
        correct: 1,
        rationale: "Environmental crises create demand for careers in sustainability, renewable energy, and environmental protection."
    },
    {
        id: 34,
        subject: "life-career",
        question: "What career fields are growing due to climate change concerns?",
        options: [
            "Fossil fuel industries only",
            "Renewable energy, environmental science, and sustainability consulting",
            "Only traditional manufacturing",
            "Only agriculture"
        ],
        correct: 1,
        rationale: "Renewable energy, environmental science, and sustainability consulting are growing due to climate change concerns."
    },
    {
        id: 35,
        subject: "life-career",
        question: "How do disasters affect career opportunities?",
        options: [
            "Disasters have no effect on careers",
            "They create demand for emergency response, disaster management, and reconstruction careers",
            "They only destroy careers",
            "They only affect doctors"
        ],
        correct: 1,
        rationale: "Disasters create demand for emergency response, disaster management, and reconstruction careers."
    },
    {
        id: 36,
        subject: "life-career",
        question: "How does human migration influence career demand?",
        options: [
            "Migration has no effect on careers",
            "It creates demand for multicultural services, translation, and integration support careers",
            "It only affects border control",
            "It only affects tourism"
        ],
        correct: 1,
        rationale: "Human migration creates demand for multicultural services, translation, and integration support careers."
    },

    // VIII. Environmental Influence - Scholarships (Questions 37-40)
    {
        id: 37,
        subject: "life-career",
        question: "What are scholarships?",
        options: [
            "Loans that must be repaid",
            "Financial assistance programs that help students pursue education",
            "Only for athletic students",
            "Only for wealthy students"
        ],
        correct: 1,
        rationale: "Scholarships are financial assistance programs that help students pursue education without repayment."
    },
    {
        id: 38,
        subject: "life-career",
        question: "How do scholarships affect career opportunities?",
        options: [
            "They have no effect on careers",
            "They enable students to access education and qualifications for desired careers",
            "They only benefit wealthy families",
            "They only affect academic careers"
        ],
        correct: 1,
        rationale: "Scholarships enable students to access education and qualifications for desired careers."
    },
    {
        id: 39,
        subject: "life-career",
        question: "What types of scholarships are available?",
        options: [
            "Only academic scholarships",
            "Academic, athletic, need-based, and career-specific scholarships",
            "Only athletic scholarships",
            "Only need-based scholarships"
        ],
        correct: 1,
        rationale: "Various types of scholarships exist: academic, athletic, need-based, and career-specific."
    },
    {
        id: 40,
        subject: "life-career",
        question: "Why should students actively seek scholarships?",
        options: [
            "Scholarships are not worth seeking",
            "They reduce financial barriers to education and career goals",
            "Only wealthy students need scholarships",
            "Scholarships are guaranteed for everyone"
        ],
        correct: 1,
        rationale: "Scholarships reduce financial barriers to education and help achieve career goals."
    },

    // IX. Environmental Influence - Mentoring (Questions 41-45)
    {
        id: 41,
        subject: "life-career",
        question: "What is mentoring?",
        options: [
            "Teaching a class",
            "The guidance and support from experienced professionals",
            "Only for students",
            "Only for beginners"
        ],
        correct: 1,
        rationale: "Mentoring is the guidance and support from experienced professionals to help others grow."
    },
    {
        id: 42,
        subject: "life-career",
        question: "How does mentoring benefit career development?",
        options: [
            "It has no benefits",
            "It provides industry insights, networking opportunities, and career guidance",
            "It only wastes time",
            "It only benefits the mentor"
        ],
        correct: 1,
        rationale: "Mentoring provides industry insights, networking opportunities, and career guidance."
    },
    {
        id: 43,
        subject: "life-career",
        question: "Who can be a mentor?",
        options: [
            "Only teachers",
            "Experienced professionals, teachers, or senior colleagues in your field",
            "Only family members",
            "Only friends"
        ],
        correct: 1,
        rationale: "Mentors can be experienced professionals, teachers, or senior colleagues in your field."
    },
    {
        id: 44,
        subject: "life-career",
        question: "What should a mentee do to benefit from mentoring?",
        options: [
            "Ignore the mentor's advice",
            "Actively seek guidance, ask questions, and implement feedback",
            "Only meet once a year",
            "Expect the mentor to solve all problems"
        ],
        correct: 1,
        rationale: "Mentees should actively seek guidance, ask questions, and implement feedback to benefit from mentoring."
    },
    {
        id: 45,
        subject: "life-career",
        question: "How can someone find a mentor?",
        options: [
            "Mentors find you automatically",
            "Through networking, professional organizations, school programs, or workplace initiatives",
            "Only through family connections",
            "Only through social media"
        ],
        correct: 1,
        rationale: "Mentors can be found through networking, professional organizations, school programs, or workplace initiatives."
    },

    // Alternative questions for Life and Career
    {
        id: 101,
        subject: "life-career",
        question: "A student excels in mathematics and enjoys solving problems. Which career path might align with their hard skills?",
        options: [
            "Artist",
            "Engineer or Data Analyst",
            "Professional Athlete",
            "Musician"
        ],
        correct: 1,
        rationale: "Engineering and data analysis require strong mathematical skills and problem-solving abilities."
    },
    {
        id: 102,
        subject: "life-career",
        question: "A student works well in teams and communicates effectively. Which soft skills do they demonstrate?",
        options: [
            "Programming skills",
            "Teamwork and communication",
            "Accounting skills",
            "Technical writing"
        ],
        correct: 1,
        rationale: "Working well in teams and communicating effectively are soft skills essential for workplace success."
    },
    {
        id: 103,
        subject: "life-career",
        question: "How can a student balance peer influence with personal career goals?",
        options: [
            "Ignore all peer opinions",
            "Consider peer input but make decisions based on personal interests and research",
            "Follow all peer suggestions blindly",
            "Let friends decide their career"
        ],
        correct: 1,
        rationale: "Students should consider peer input but make career decisions based on personal interests and research."
    },
    {
        id: 104,
        subject: "life-career",
        question: "Why is continuous learning important in today's job market?",
        options: [
            "It's not important",
            "Technology and job requirements change rapidly, requiring ongoing skill development",
            "Only for technology careers",
            "Only for medical careers"
        ],
        correct: 1,
        rationale: "Technology and job requirements change rapidly, making continuous learning essential for career success."
    },
    {
        id: 105,
        subject: "life-career",
        question: "What is the benefit of having diverse skills (both hard and soft)?",
        options: [
            "No benefit",
            "Greater adaptability and opportunities across different career paths",
            "Only useful for one specific job",
            "Only important for managers"
        ],
        correct: 1,
        rationale: "Diverse skills provide greater adaptability and opportunities across different career paths."
    }
];

// PagKas Questions - Second Term First Summative
const pagkasQuestions = [
    // I. Mga Anyo ng Pakikibaka (Questions 1-10)
    {
        id: 1,
        subject: "pagkas",
        question: "Ano ang kahulugan ng pakikibaka?",
        options: [
            "Pagsunod lamang sa utos",
            "Pagkilos o paglaban para sa isang layunin",
            "Pag-iwas sa anumang problema",
            "Paghahanap ng kayamanan"
        ],
        correct: 1,
        rationale: "Ang pakikibaka ay pagkilos o paglaban para sa isang layunin, lalo na sa panahon ng pananakop at pang-aapi."
    },
    {
        id: 2,
        subject: "pagkas",
        question: "Bakit hindi iisa ang paraan ng pakikibaka?",
        options: [
            "Dahil walang layunin",
            "Nagkakaiba ito batay sa layunin, panahon, at sitwasyon",
            "Lahat ay dapat gumamit ng armas",
            "Dapat lahat ay mapayapa"
        ],
        correct: 1,
        rationale: "Ang pakikibaka ay nagkakaiba batay sa layunin, panahon, at sitwasyon."
    },
    {
        id: 3,
        subject: "pagkas",
        question: "Ano ang armadong pakikibaka?",
        options: [
            "Paggamit ng panulat at edukasyon",
            "Paggamit ng sandata o lakas upang labanan ang mananakop",
            "Mapayapang protesta lamang",
            "Pag-aalis ng problema"
        ],
        correct: 1,
        rationale: "Ang armadong pakikibaka ay paggamit ng sandata o lakas upang labanan ang mananakop."
    },
    {
        id: 4,
        subject: "pagkas",
        question: "Ano ang mapayapang pakikibaka?",
        options: [
            "Paggamit ng mga baril",
            "Pagsali sa digmaan",
            "Kilos-protesta, boycott, petisyon, at mapayapang pagtutol",
            "Pagtakas sa problema"
        ],
        correct: 2,
        rationale: "Ang mapayapang pakikibaka ay kinabibilangan ng kilos-protesta, boycott, petisyon, at mapayapang pagtutol."
    },
    {
        id: 5,
        subject: "pagkas",
        question: "Ano ang pakikibakang intelektuwal?",
        options: [
            "Paggamit ng lakas",
            "Paggamit ng panulat, edukasyon, at ideya upang magmulat ng kamalayan",
            "Pagsali sa labanan",
            "Pagtakas sa sitwasyon"
        ],
        correct: 1,
        rationale: "Ang pakikibakang intelektuwal ay paggamit ng panulat, edukasyon, at ideya upang magmulat ng kamalayan."
    },
    {
        id: 6,
        subject: "pagkas",
        question: "Sino ang pangunahing pinuno ng Katipunan sa Himagsikang Pilipino (1896-1898)?",
        options: [
            "Jose Rizal",
            "Andres Bonifacio",
            "Emilio Aguinaldo",
            "Apolinario Mabini"
        ],
        correct: 1,
        rationale: "Si Andres Bonifacio ang pangunahing pinuno ng Katipunan sa Himagsikang Pilipino laban sa Espanya."
    },
    {
        id: 7,
        subject: "pagkas",
        question: "Anong himagsikan ang pinakamahabang pag-aalsa sa kasaysayan ng Pilipinas?",
        options: [
            "Himagsikang Pilipino",
            "Rebolusyong Dagohoy (1744-1829)",
            "Digmaang Pilipino-Amerikano",
            "Himagsikan sa Cavite"
        ],
        correct: 1,
        rationale: "Ang Rebolusyong Dagohoy (1744-1829) ang pinakamahabang pag-aalsa sa kasaysayan ng Pilipinas na naganap sa Bohol."
    },
    {
        id: 8,
        subject: "pagkas",
        question: "Sino ang gumamit ng diplomasya at talakayan upang isulong ang kalayaan?",
        options: [
            "Andres Bonifacio at Emilio Aguinaldo",
            "Apolinario Mabini at Manuel L. Quezon",
            "Jose Rizal at Marcelo H. del Pilar",
            "Diego Silang at Gabriela Silang"
        ],
        correct: 1,
        rationale: "Si Apolinario Mabini at Manuel L. Quezon ang gumamit ng diplomasya at talakayan upang isulong ang kalayaan."
    },
    {
        id: 9,
        subject: "pagkas",
        question: "Ano ang Kilusang Sakdalista noong 1930s?",
        options: [
            "Kilusang panrelihiyon",
            "Nagprotesta laban sa kolonyal na pamahalaan ng Amerika at naghangad ng agarang kalayaan",
            "Kilusang pang-ekonomiya lamang",
            "Kilusang pangkalusugan"
        ],
        correct: 1,
        rationale: "Ang Kilusang Sakdalista ay nagprotesta laban sa kolonyal na pamahalaan ng Amerika at naghangad ng agarang kalayaan."
    },
    {
        id: 10,
        subject: "pagkas",
        question: "Ano ang gerilyang pakikidigma?",
        options: [
            "Malaking grupo na lumalaban",
            "Maliliit at mabilis na pangkat na kumikilos upang harapin ang mas malakas na puwersa",
            "Armadong paglaban lamang",
            "Mapayapang protesta"
        ],
        correct: 1,
        rationale: "Sa gerilyang pakikidigma, maliliit at mabilis na pangkat ang kumikilos upang harapin ang mas malakas na puwersa."
    },

    // II. Kolonyalismong Espanyol (Questions 11-20)
    {
        id: 11,
        subject: "pagkas",
        question: "Ano ang pangunahing dahilan ng kolonyalismo ng Espanya sa Pilipinas?",
        options: [
            "Paghahanap ng kayamanan, pagpapalawak ng kapangyarihan, at pagpapalaganap ng Kristiyanismo",
            "Pagtulong sa mga Pilipino",
            "Pagpapalaganap ng kultura lamang",
            "Pagtuturo ng wikang Kastila"
        ],
        correct: 0,
        rationale: "Ang pananakop ng Espanya ay udyok ng paghahanap ng kayamanan, pagpapalawak ng kapangyarihan, at pagpapalaganap ng Kristiyanismo."
    },
    {
        id: 12,
        subject: "pagkas",
        question: "Ano ang encomienda?",
        options: [
            "Sistema ng pagtuturo",
            "Sistema kung saan binibigyan ang isang Espanyol ng lupa at mga Pilipino na nagtatrabaho",
            "Uri ng relihiyon",
            "Sistema ng kalakalan"
        ],
        correct: 1,
        rationale: "Ang encomienda ay sistema kung saan binibigyan ang isang Espanyol ng lupa at mga Pilipino na nagtatrabaho."
    },
    {
        id: 13,
        subject: "pagkas",
        question: "Ano ang polo y servicios?",
        options: [
            "Sistema ng pagbubuhis",
            "Sapilitang paggawa ng mga Pilipino para sa mga Espanyol",
            "Uri ng pagkain",
            "Sistema ng pagpapalakal"
        ],
        correct: 1,
        rationale: "Ang polo y servicios ay sapilitang paggawa ng mga Pilipino para sa mga Espanyol."
    },
    {
        id: 14,
        subject: "pagkas",
        question: "Sino ang Gobernador-Heneral?",
        options: [
            "Pinuno ng mga prayle",
            "Pinakamataas na awtoridad na kinatawan ng hari ng Espanya",
            "Pinuno ng mga magsasaka",
            "Pinuno ng mga ilustrado"
        ],
        correct: 1,
        rationale: "Ang Gobernador-Heneral ang pinakamataas na awtoridad na kinatawan ng hari ng Espanya."
    },
    {
        id: 15,
        subject: "pagkas",
        question: "Ano ang kalakalang Galyon?",
        options: [
            "Kalakalan sa pagitan ng Pilipinas at China",
            "Kalakalan ng ginto sa pagitan ng Espanya at Pilipinas",
            "Kalakalan sa loob ng Pilipinas lamang",
            "Kalakalan ng produkto sa Amerika"
        ],
        correct: 1,
        rationale: "Ang kalakalang Galyon ay kalakalan ng ginto sa pagitan ng Espanya at Pilipinas na nagpalubha sa lokal na ekonomiya."
    },
    {
        id: 16,
        subject: "pagkas",
        question: "Ano ang frailocracy?",
        options: [
            "Pamumuno ng mga datu",
            "Pamumuno ng mga prayle o paring Espanyol",
            "Pamumuno ng mga ilustrado",
            "Pamumuno ng mga indio"
        ],
        correct: 1,
        rationale: "Ang frailocracy ay pamumuno ng mga prayle o paring Espanyol dahil sa pagkakaisa ng simbahan at estado."
    },
    {
        id: 17,
        subject: "pagkas",
        question: "Ano ang Educational Decree of 1863?",
        options: [
            "Pagbawas ng mga paaralan",
            "Tangkang buksan ang paaralan sa lahat ngunit nanatiling makamayaman",
            "Pagtatayo ng mga simbahan lamang",
            "Pagtanggal ng edukasyon"
        ],
        correct: 1,
        rationale: "Ang Educational Decree of 1863 ay tangkang buksan ang paaralan sa lahat ngunit nanatiling makamayaman."
    },
    {
        id: 18,
        subject: "pagkas",
        question: "Sino ang mga Peninsulares?",
        options: [
            "Espanyol mula Espanya",
            "Espanyol ipinanganak sa Pilipinas",
            "Katutubong Pilipino",
            "Mestizo"
        ],
        correct: 0,
        rationale: "Ang mga Peninsulares ay mga Espanyol mula Espanya na nasa pinakamataas na antas ng lipunang kolonyal."
    },
    {
        id: 19,
        subject: "pagkas",
        question: "Sino ang mga Indio sa sistemang caste?",
        options: [
            "Espanyol mula Espanya",
            "Espanyol ipinanganak sa Pilipinas",
            "Katutubong Pilipino na pinakaapi",
            "Mestizo"
        ],
        correct: 2,
        rationale: "Ang mga Indio ay katutubong Pilipino na nasa pinakamababang antas at pinakaapi sa sistemang caste."
    },
    {
        id: 20,
        subject: "pagkas",
        question: "Ano ang Limpieza de Sangre?",
        options: [
            "Pagsusuri ng dugo",
            "Kadalisayan ng dugo kung saan ang halaga ng tao ay itinatakda ng kanyang lahi",
            "Uri ng sakit",
            "Sistema ng pagkain"
        ],
        correct: 1,
        rationale: "Ang Limpieza de Sangre ay kadalisayan ng dugo kung saan ang halaga ng tao ay itinatakda ng kanyang lahi."
    },

    // III. Mga Tugon ng mga Pilipino (Questions 21-30)
    {
        id: 21,
        subject: "pagkas",
        question: "Ano ang ginawa ng mga Pilipino sa pamamagitan ng pag-aalsa at himagsikan?",
        options: [
            "Sumunod lamang sa Espanya",
            "Lumaban laban sa mapang-aping pamamahala ng mga mananakop",
            "Umalis sa Pilipinas",
            "Pumayag sa pang-aapi"
        ],
        correct: 1,
        rationale: "Dahil sa pang-aabuso ng mga Espanyol, maraming Pilipino ang nag-aklas at lumaban."
    },
    {
        id: 22,
        subject: "pagkas",
        question: "Paano nagtatanggol ang mga Pilipino sa kanilang sariling kultura?",
        options: [
            "Sumunod sa kultura ng Espanya",
            "Pinagtibay ang pagkakakilanlan sa pamamagitan ng pagpapanatili ng wika, sining, at kaugalian",
            "Tinanggihan ang kanilang kultura",
            "Ginamit ang wikang Kastila"
        ],
        correct: 1,
        rationale: "Pinagtibay ng mga Pilipino ang kanilang pagkakakilanlan sa pamamagitan ng pagpapanatili ng wika, sining, at kaugalian."
    },
    {
        id: 23,
        subject: "pagkas",
        question: "Sino ang mga ilustrado at propagandista?",
        options: [
            "Mga magsasaka",
            "Mga edukadong Pilipino na hinangad ng reporma at pagkakapantay-pantay",
            "Mga prayle",
            "Mga Espanyol"
        ],
        correct: 1,
        rationale: "Ang mga ilustrado at propagandista ay mga edukadong Pilipino na hinangad ng reporma at pagkakapantay-pantay."
    },
    {
        id: 24,
        subject: "pagkas",
        question: "Ano ang ipinaglaban ng mga propagandista?",
        options: [
            "Pananakop ng ibang bansa",
            "Pantay na karapatan, kalayaan sa pamamahayag, at representasyon sa pamahalaan",
            "Pagpapalakal ng Espanya",
            "Pagtanggal ng edukasyon"
        ],
        correct: 1,
        rationale: "Ipinaglaban ng mga propagandista ang pantay na karapatan, kalayaan sa pamamahayag, at representasyon sa pamahalaan."
    },
    {
        id: 25,
        subject: "pagkas",
        question: "Sino ang mga pangunahing propagandista?",
        options: [
            "Andres Bonifacio at Emilio Aguinaldo",
            "Jose Rizal, Marcelo H. del Pilar, at Graciano Lopez Jaena",
            "Apolinario Mabini at Manuel L. Quezon",
            "Diego Silang at Gabriela Silang"
        ],
        correct: 1,
        rationale: "Si Jose Rizal, Marcelo H. del Pilar, at Graciano Lopez Jaena ang mga pangunahing propagandista."
    },
    {
        id: 26,
        subject: "pagkas",
        question: "Ano ang mga akda ni Jose Rizal na nagmulat sa kamalayan ng mamamayan?",
        options: [
            "Mga tula lamang",
            "Noli Me Tangere at El Filibusterismo",
            "Mga kanta",
            "Mga dulog panteatro"
        ],
        correct: 1,
        rationale: "Ang Noli Me Tangere at El Filibusterismo ni Jose Rizal ay nagmulat sa kamalayan ng mamamayan."
    },
    {
        id: 27,
        subject: "pagkas",
        question: "Paano nag-aklas si Francisco Dagohoy?",
        options: [
            "Sa pamamagitan ng diplomasya",
            "Sa pamamagitan ng armadong paglaban sa Bohol",
            "Sa pamamagitan ng pagtatagod",
            "Sa pamamagitan ng pag-aalis"
        ],
        correct: 1,
        rationale: "Si Francisco Dagohoy ay nag-aklas sa pamamagitan ng armadong paglaban sa Bohol laban sa Espanya."
    },
    {
        id: 28,
        subject: "pagkas",
        question: "Ano ang papel ng mga kababaihan sa panitikan bilang pakikibaka?",
        options: [
            "Walang papel",
            "Nagpahayag ng damdaming makabayan at panlipunan sa pamamagitan ng kanilang mga akda",
            "Sumunod lamang sa mga lalaki",
            "Nagtayo ng mga bahay"
        ],
        correct: 1,
        rationale: "Ang mga kababaihan sa panitikan ay nagpahayag ng damdaming makabayan at panlipunan sa pamamagitan ng kanilang mga akda."
    },
    {
        id: 29,
        subject: "pagkas",
        question: "Ano ang epekto ng kolonyalismo sa ekonomiya ng Pilipinas?",
        options: [
            "Naging masagana ang ekonomiya",
            "Kinontrol ng Espanya ang kalakalan at likas na yaman para sa sariling kapakanan",
            "Naging malaya ang Pilipinas",
            "Nabigyan ng karapatan ang mga magsasaka"
        ],
        correct: 1,
        rationale: "Kinontrol ng Espanya ang kalakalan at likas na yaman ng Pilipinas para sa sariling kapakanan."
    },
    {
        id: 30,
        subject: "pagkas",
        question: "Ano ang indulto de comercio?",
        options: [
            "Pribelehiyong makilahok sa kalakalan na ginamit ng mga alcalde Mayor",
            "Sistema ng pagbubuhis",
            "Uri ng relihiyon",
            "Sistema ng edukasyon"
        ],
        correct: 0,
        rationale: "Ang indulto de comercio ay pribelehiyong makilahok sa kalakalan na ginamit ng mga alcalde Mayor."
    },

    // IV. Batas Militar (Questions 31-40)
    {
        id: 31,
        subject: "pagkas",
        question: "Ano ang Batas Militar?",
        options: [
            "Paghahanap ng kalayaan",
            "Paglaban sa diktadura upang maibalik ang demokrasya at karapatang pantao",
            "Sistema ng edukasyon",
            "Uri ng ekonomiya"
        ],
        correct: 1,
        rationale: "Ang Batas Militar ay paglaban sa diktadura upang maibalik ang demokrasya at karapatang pantao."
    },
    {
        id: 32,
        subject: "pagkas",
        question: "Sino ang nagpatakwad ng Batas Militar noong 1972?",
        options: [
            "Jose Rizal",
            "Ferdinand Marcos",
            "Emilio Aguinaldo",
            "Manuel L. Quezon"
        ],
        correct: 1,
        rationale: "Si Ferdinand Marcos ang nagpatakwad ng Batas Militar noong 1972."
    },
    {
        id: 33,
        subject: "pagkas",
        question: "Ano ang First Quarter Storm (FQS)?",
        options: [
            "Uri ng bagyo",
            "Serye ng mga protesta noong 1970 laban sa diktadura",
            "Uri ng laro",
            "Sistema ng edukasyon"
        ],
        correct: 1,
        rationale: "Ang First Quarter Storm (FQS) ay serye ng mga protesta noong 1970 laban sa diktadura."
    },
    {
        id: 34,
        subject: "pagkas",
        question: "Ano ang Oplan Bayanihan?",
        options: [
            "Sistema ng edukasyon",
            "Internal security plan na patuloy na nagpapabagsak sa karapatang pantao",
            "Uri ng ekonomiya",
            "Programa pangkalusugan"
        ],
        correct: 1,
        rationale: "Ang Oplan Bayanihan ay internal security plan na patuloy na nagpapabagsak sa karapatang pantao."
    },
    {
        id: 35,
        subject: "pagkas",
        question: "Ano ang enforced disappearance?",
        options: [
            "Paglayas ng tao",
            "Pagkawala ng tao sa walang impormasyon sa lokasyon o kalagayan",
            "Pagpatay ng tao",
            "Pagbili ng tao"
        ],
        correct: 1,
        rationale: "Ang enforced disappearance ay pagkawala ng tao sa walang impormasyon sa lokasyon o kalagayan."
    },
    {
        id: 36,
        subject: "pagkas",
        question: "Paano ipinakita ng mga aktibista ang kanilang pakikibaka laban sa Batas Militar?",
        options: [
            "Sa pamamagitan ng pagpapakumbaba",
            "Sa pamamagitan ng mga protesta, welga, at demonstrasyon",
            "Sa pamamagitan ng pag-aalis",
            "Sa pamamagitan ng pagtataboy"
        ],
        correct: 1,
        rationale: "Ipinakita ng mga aktibista ang kanilang pakikibaka sa pamamagitan ng mga protesta, welga, at demonstrasyon."
    },
    {
        id: 37,
        subject: "pagkas",
        question: "Ano ang Guardia Civil?",
        options: [
            "Grupo ng mga magsasaka",
            "Itinatag noong 1868 upang panatilihin ang kaayusan ngunit naging simbolo ng dahas",
            "Grupo ng mga guro",
            "Grupo ng mga manggagawa"
        ],
        correct: 1,
        rationale: "Ang Guardia Civil ay itinatag noong 1868 upang panatilihin ang kaayusan ngunit naging simbolo ng dahas."
    },
    {
        id: 38,
        subject: "pagkas",
        question: "Bakit mahalaga ang pagkakaisa sa pakikibaka?",
        options: [
            "Dahil mas marami ang kailangang kainin",
            "Dahil ang isang bansang walang pagkakaisa ay madaling mapasailalim ng dayuhang kapangyarihan",
            "Dahil mas madaling makakuha ng trabaho",
            "Dahil mas marami ang pera"
        ],
        correct: 1,
        rationale: "Ang isang bansang walang pagkakaisa ay madaling mapasailalim ng dayuhang kapangyarihan."
    },
    {
        id: 39,
        subject: "pagkas",
        question: "Ano ang kinalaman ng mga kabataan sa pakikibaka laban sa Batas Militar?",
        options: [
            "Walang kinalaman",
            "Naglunsad ng mga welga at demonstrasyon para sa karapatan sa edukasyon",
            "Sumunod lamang sa pamahalaan",
            "Umalis sa bansa"
        ],
        correct: 1,
        rationale: "Ang mga kabataan ay naglunsad ng mga welga at demonstrasyon para sa karapatan sa edukasyon."
    },
    {
        id: 40,
        subject: "pagkas",
        question: "Ano ang aral ng Batas Militar?",
        options: [
            "Dapat sundin ang diktadura",
            "Dapat ipaglaban ang demokrasya at karapatang pantao",
            "Dapat umalis sa bansa",
            "Dapat maging pasaway"
        ],
        correct: 1,
        rationale: "Ang aral ng Batas Militar ay dapat ipaglaban ang demokrasya at karapatang pantao."
    },

    // V. Mga Aral at Konklusyon (Questions 41-45)
    {
        id: 41,
        subject: "pagkas",
        question: "Ano ang kahalagahan ng soberanya?",
        options: [
            "Walang kahalagahan",
            "Ang kalayaan at pagkakaisa ng bansa ay dapat ipaglaban",
            "Dapat ipagbili ang bansa",
            "Dapat sumunod sa ibang bansa"
        ],
        correct: 1,
        rationale: "Ang soberanya ay mahalaga dahil ang kalayaan at pagkakaisa ng bansa ay dapat ipaglaban."
    },
    {
        id: 42,
        subject: "pagkas",
        question: "Ano ang pangmatagalang epekto ng kolonyalismo sa pulitika?",
        options: [
            "Naging perpekto ang sistema",
            "Ang sistema ng patronahe sa pulitika ay pamana ng kolonyal na pamamaraan",
            "Nawala ang pulitika",
            "Naging demokratiko ang lahat"
        ],
        correct: 1,
        rationale: "Ang sistema ng patronahe sa pulitika ay pamana ng kolonyal na pamamaraan na kailangang harapin."
    },
    {
        id: 43,
        subject: "pagkas",
        question: "Ano ang di-pantay na pamamahagi ng yaman?",
        options: [
            "Lahat ay may pantay na yaman",
            "Pamana ng kolonyalismo na nagdulot ng pagkakawatak-watak ng lipunan",
            "Walang nagmamay-ari",
            "Lahat ay mahirap"
        ],
        correct: 1,
        rationale: "Ang di-pantay na pamamahagi ng yaman ay pamana ng kolonyalismo na nagdulot ng pagkakawatak-watak ng lipunan."
    },
    {
        id: 44,
        subject: "pagkas",
        question: "Bakit mahalaga ang kamalayang makabayan?",
        options: [
            "Dahil kailangan ng pera",
            "Dahil ito ay nagbigay-inspirasyon sa mga Pilipino na ipaglaban ang kanilang kalayaan",
            "Dahil kailangan ng trabaho",
            "Dahil kailangan ng abroad"
        ],
        correct: 1,
        rationale: "Ang kamalayang makabayan ay nagbigay-inspirasyon sa mga Pilipino na ipaglaban ang kanilang kalayaan."
    },
    {
        id: 45,
        subject: "pagkas",
        question: "Ano ang konklusyon tungkol sa pakikibaka?",
        options: [
            "Dapat huwag lumaban",
            "Ang pakikibaka ay nagsilbing punla ng kamalayang makabayan at dapat ipagpatuloy ang paglaban sa katarungan",
            "Dapat sumuko sa dayuhan",
            "Dapat maging pasaway"
        ],
        correct: 1,
        rationale: "Ang pakikibaka ay nagsilbing punla ng kamalayang makabayan at dapat ipagpatuloy ang paglaban sa katarungan."
    },

    // Alternative questions for PagKas
    {
        id: 101,
        subject: "pagkas",
        question: "Tama o Mali: Ang pakikibaka ay nasusukat lamang sa pamamagitan ng pisikal na labanan o paggamit ng karahasan.",
        options: [
            "Tama",
            "Mali - nagkakaiba ang anyo ng pakikibaka batay sa layunin at sitwasyon",
            "Tama sa lahat ng pagkakataon",
            "Walang kasagutan"
        ],
        correct: 1,
        rationale: "Mali - ang pakikibaka ay hindi lamang pisikal na labanan kundi maaari ring mapayapa o intelektuwal."
    },
    {
        id: 102,
        subject: "pagkas",
        question: "Tama o Mali: Sa ilalim ng Educational Decree of 1863, naging bukas ang paaralan para sa lahat ngunit nanatili itong para sa piling tao at mayayaman.",
        options: [
            "Tama",
            "Mali - libre sa lahat",
            "Mali - wala pang paaralan",
            "Walang kasagutan"
        ],
        correct: 0,
        rationale: "Tama - kahit may Educational Decree, nanatiling para sa piling tao at mayayaman ang edukasyon."
    },
    {
        id: 103,
        subject: "pagkas",
        question: "Tama o Mali: Ang kalakalang Galyon ay nakatulong nang lubusan sa pag-unlad ng lokal na agrikultura at industriya ng Pilipinas.",
        options: [
            "Tama",
            "Mali - nagpalubha ito sa lokal na ekonomiya",
            "Mali - walang epekto",
            "Walang kasagutan"
        ],
        correct: 1,
        rationale: "Mali - ang kalakalang Galyon ay nagpalubha sa lokal na ekonomiya dahil monopolyo ng Espanya."
    },
    {
        id: 104,
        subject: "pagkas",
        question: "Tama o Mali: Sa sistemang Encomienda, ang pangunahing dahilan ng pagkawala ng lupa ng maraming magsasaka hanggang sa kasalukuyan.",
        options: [
            "Tama",
            "Mali - hindi ito ang pangunahing dahilan",
            "Mali - bumalik na ang lahat ng lupa",
            "Walang kasagutan"
        ],
        correct: 0,
        rationale: "Tama - ang sistemang Encomienda ay nagdulot ng pagkawala ng lupa ng maraming magsasaka."
    },
    {
        id: 105,
        subject: "pagkas",
        question: "Ayon sa prinsipyo ng mapayapang pakikibaka, ano ang paraan upang makamit ang katarungan?",
        options: [
            "Paggamit ng karahasan",
            "Maayos na pakikipag-usap at hindi paggamit ng pananakit",
            "Pagtakas lamang",
            "Pagsunod lamang"
        ],
        correct: 1,
        rationale: "Ayon sa prinsipyo ng mapayapang pakikibaka, ang katarungan ay maaaring makamit sa pamamagitan ng maayos na pakikipag-usap."
    }
];

// Combine all questions
const allQuestions = [
    ...scienceQuestions.map(q => ({...q, subject: "science"})),
    ...mathQuestions,
    ...biologyQuestions,
    ...komunikasyonQuestions,
    ...effectiveCommQuestions,
    ...lifeCareerQuestions,
    ...pagkasQuestions
];

// Shuffle function for randomization
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Select random subset of questions (alternatives replace originals)
function selectRandomQuestions(subject) {
    const subjectQuestions = allQuestions.filter(q => q.subject === subject);
    const selected = [];
    
    // Group questions by their base ID (1-60)
    for (let baseId = 1; baseId <= 60; baseId++) {
        const original = subjectQuestions.find(q => q.id === baseId);
        const alternative = subjectQuestions.find(q => q.id === baseId + 100);
        
        // 30% chance to use alternative if it exists
        if (alternative && Math.random() < 0.3) {
            selected.push(alternative);
        } else if (original) {
            selected.push(original);
        }
    }
    
    // Shuffle the selected questions
    return shuffleArray(selected);
}

// Current subject and questions
let currentSubject = "science";
let questions = selectRandomQuestions(currentSubject);

// State management
let currentQuestionIndex = 0;
let userAnswers = {}; // Use object to store answers by question ID
let reviewAnswers = {}; // Store answers for review mode
let wrongQuestions = [];
let isReviewMode = false;
let reviewIndex = 0;
let isExamMode = false;
let examAnswers = {};
let examTimeLeft = 0;
let examTimerInterval = null;
let examSubmitted = false;
let examPending = false;          // true while the briefing / countdown is showing
let examCountdownTimer = null;
let examLeaveTimer = null;

// DOM Elements
const questionCard = document.getElementById('question-card');
const emptyState = document.getElementById('empty-state');
const noWrongState = document.getElementById('no-wrong-state');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');
const rationale = document.getElementById('rationale');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressCircle = document.getElementById('progress-circle');
const progressText = document.getElementById('progress-text');
const questionCount = document.getElementById('question-count');
const correctCount = document.getElementById('correct-count');
const wrongCount = document.getElementById('wrong-count');
const reviewBtn = document.getElementById('review-btn');
const practiceModeBtn = document.getElementById('practice-mode');
const reviewModeBtn = document.getElementById('review-mode');
const restartBtn = document.getElementById('restart-btn');
const backToPracticeBtn = document.getElementById('back-to-practice');
const scienceBtn = document.getElementById('science-btn');
const mathBtn = document.getElementById('math-btn');
const biologyBtn = document.getElementById('biology-btn');
const komunikasyonBtn = document.getElementById('komunikasyon-btn');
const effectiveCommBtn = document.getElementById('effective-comm-btn');
const lifeCareerBtn = document.getElementById('life-career-btn');
const pagkasBtn = document.getElementById('pagkas-btn');
const examModeBtn = document.getElementById('exam-mode');
const examTimerWrap = document.getElementById('exam-timer-wrap');
const examTimer = document.getElementById('exam-timer');
const submitExamBtn = document.getElementById('submit-exam-btn');
const examResult = document.getElementById('exam-result');
const examScoreText = document.getElementById('exam-score-text');
const examDetailText = document.getElementById('exam-detail-text');
const examReviewBtn = document.getElementById('exam-review-btn');
const examRetryBtn = document.getElementById('exam-retry-btn');
const examPracticeBtn = document.getElementById('exam-practice-btn');
const examIntro = document.getElementById('exam-intro');
const examIntroSubject = document.getElementById('exam-intro-subject');
const examIntroCount = document.getElementById('exam-intro-count');
const examIntroTime = document.getElementById('exam-intro-time');
const examBeginBtn = document.getElementById('exam-begin-btn');
const examCancelBtn = document.getElementById('exam-cancel-btn');
const examCancelBtn2 = document.getElementById('exam-cancel-btn-2');
const examCountNum = document.getElementById('exam-count-num');
const examSubjectPill = document.getElementById('exam-subject-pill');

// ---------- Small animation helpers ----------
function replayClass(el, cls) {
    if (!el) return;
    el.classList.remove(cls);
    void el.offsetWidth; // force reflow so the animation restarts
    el.classList.add(cls);
}

function animateQuestion(dir) {
    const el = questionCard && questionCard.querySelector('.card-scroll');
    if (!el) return;
    el.classList.remove('q-in-next', 'q-in-prev');
    void el.offsetWidth;
    el.scrollTop = 0;
    el.classList.add(dir >= 0 ? 'q-in-next' : 'q-in-prev');
}

// Initialize
function init() {
    renderQuestion();
    updateStats();
    setupEventListeners();
}

// Render current question
function renderQuestion() {
    if (typeof examResult !== 'undefined' && examResult) examResult.classList.add('hidden');

    const isReview = isReviewMode;
    const isExam = isExamMode && !isReview;

    // Exam briefing / countdown replaces the question card until the exam actually begins
    if (isExam && examPending) {
        showExamIntro();
        return;
    }
    if (examIntro) examIntro.classList.add('hidden');

    const currentQuestions = isReview ? wrongQuestions : questions;
    const currentIndex = isReview ? reviewIndex : currentQuestionIndex;

    if (currentQuestions.length === 0) {
        if (isReview) {
            questionCard.classList.add('hidden');
            noWrongState.classList.remove('hidden');
        } else {
            questionCard.classList.add('hidden');
            emptyState.classList.remove('hidden');
        }
        if (submitExamBtn) submitExamBtn.classList.add('hidden');
        if (examTimerWrap) examTimerWrap.classList.add('hidden');
        return;
    }

    questionCard.classList.remove('hidden');
    emptyState.classList.add('hidden');
    noWrongState.classList.add('hidden');
    if (typeof examResult !== 'undefined' && examResult) examResult.classList.add('hidden');

    const question = currentQuestions[currentIndex];
    if (!question) return;
    const userAnswer = isReview ? reviewAnswers[question.id] : (isExam ? examAnswers[question.id] : userAnswers[question.id]);

    questionNumber.textContent = isReview
        ? `Wrong Question ${currentIndex + 1} of ${wrongQuestions.length}`
        : (isExam
            ? `Exam Question ${currentIndex + 1} of ${questions.length}`
            : `Question ${currentIndex + 1} of ${questions.length}`);

    // Render options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-purple-400 font-medium';
        button.innerHTML = `
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 mr-3 text-sm font-bold">
                ${String.fromCharCode(65 + index)}
            </span>
            ${option}
        `;

        if (isExam) {
            if (userAnswer === index) button.classList.add('selected');
            button.addEventListener('click', () => selectAnswer(index));
        } else {
            if (userAnswer === index) button.classList.add('selected');
            if (userAnswer !== undefined && userAnswer !== null) {
                if (index === question.correct) {
                    button.classList.add('correct');
                } else if (index === userAnswer && userAnswer !== question.correct) {
                    button.classList.add('wrong');
                }
                button.disabled = true;
            } else {
                button.addEventListener('click', () => selectAnswer(index));
            }
        }

        optionsContainer.appendChild(button);
    });

    // Show feedback if answered (hidden in exam mode until submit)
    if (isExam) {
        feedback.classList.add('hidden');
    } else if (userAnswer !== undefined && userAnswer !== null) {
        feedback.classList.remove('hidden');
        const isCorrect = userAnswer === question.correct;
        feedback.className = `mt-6 p-4 rounded-xl ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`;
        feedbackText.textContent = isCorrect ? 'Correct!' : 'Incorrect';
        feedbackText.className = `font-semibold mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`;
        rationale.textContent = question.rationale;
    } else {
        feedback.classList.add('hidden');
    }

    // Update navigation buttons
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentQuestions.length - 1;
    if (submitExamBtn) {
        if (isExam) {
            submitExamBtn.classList.remove('hidden');
            updateSubmitButtonState();
        } else {
            submitExamBtn.classList.add('hidden');
            submitExamBtn.disabled = false;
            submitExamBtn.textContent = 'Submit Exam';
        }
    }
    if (examTimerWrap) {
        if (isExam) examTimerWrap.classList.remove('hidden');
        else examTimerWrap.classList.add('hidden');
    }
}

// Select answer
function selectAnswer(index) {
    const isReview = isReviewMode;
    const isExam = isExamMode && !isReview;
    const currentQuestions = isReview ? wrongQuestions : questions;
    const currentIndex = isReview ? reviewIndex : currentQuestionIndex;
    const question = currentQuestions[currentIndex];
    if (!question) return;

    if (isExam) {
        examAnswers[question.id] = index;
        // Update the choices in place (no rebuild) so the selection animates smoothly
        Array.from(optionsContainer.children).forEach((btn, i) => {
            btn.classList.toggle('selected', i === index);
            if (i === index) replayClass(btn, 'just-picked');
        });
        updateStats();
        return;
    } else if (isReview) {
        reviewAnswers[question.id] = index;
    } else {
        userAnswers[question.id] = index;

        // Track wrong answers (match by id + subject since ids repeat across subjects)
        if (index !== question.correct) {
            if (!wrongQuestions.find(q => q.id === question.id && q.subject === question.subject)) {
                wrongQuestions.push(question);
            }
        } else {
            wrongQuestions = wrongQuestions.filter(q => !(q.id === question.id && q.subject === question.subject));
        }
    }

    renderQuestion();
    updateStats();
}

// Update statistics
function updateStats() {
    const isExam = isExamMode && !isReviewMode;

    if (isExam) {
        const answered = Object.keys(examAnswers).length;
        questionCount.textContent = `${answered} / ${questions.length} Questions`;
        correctCount.textContent = '–';
        wrongCount.textContent = '–';
        const progress = questions.length ? (answered / questions.length) * 100 : 0;
        const circumference = 2 * Math.PI * 28;
        const offset = circumference - (progress / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
        progressText.textContent = `${Math.round(progress)}%`;
        reviewBtn.classList.add('hidden');
        updateSubmitButtonState();
        return;
    }

    const answered = Object.keys(userAnswers).length;
    let correct = 0;
    let wrong = 0;

    questions.forEach(q => {
        if (userAnswers[q.id] !== undefined) {
            if (userAnswers[q.id] === q.correct) {
                correct++;
            } else {
                wrong++;
            }
        }
    });

    questionCount.textContent = `${answered} / ${questions.length} Questions`;
    correctCount.textContent = correct;
    wrongCount.textContent = wrong;

    // Update progress circle
    const progress = questions.length ? (answered / questions.length) * 100 : 0;
    const circumference = 2 * Math.PI * 28;
    const offset = circumference - (progress / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    progressText.textContent = `${Math.round(progress)}%`;

    // Update review button
    if (wrongQuestions.length > 0) {
        reviewBtn.classList.remove('hidden');
        reviewBtn.innerHTML = `Review Wrong (${wrongQuestions.length})`;
    } else {
        reviewBtn.classList.add('hidden');
    }
}

// ---------- Exam mode helpers ----------
function getExamDuration() {
    return Math.max(questions.length * 60, 600);
}

function formatExamTime(totalSeconds) {
    const s = Math.max(0, totalSeconds);
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
}

function updateExamTimerDisplay() {
    if (!examTimer) return;
    examTimer.textContent = formatExamTime(examTimeLeft);
    if (examTimerWrap) {
        if (examTimeLeft <= 300) examTimerWrap.classList.add('danger');
        else examTimerWrap.classList.remove('danger');
    }
}

function stopExamTimer() {
    if (examTimerInterval) {
        clearInterval(examTimerInterval);
        examTimerInterval = null;
    }
    if (examTimerWrap) examTimerWrap.classList.remove('danger');
}

function startExamTimer() {
    stopExamTimer();
    examTimeLeft = getExamDuration();
    updateExamTimerDisplay();
    examTimerInterval = setInterval(() => {
        examTimeLeft--;
        updateExamTimerDisplay();
        if (examTimeLeft <= 0) {
            submitExam(true);
        }
    }, 1000);
}

function updateModeButtons() {
    const active = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
    const inactive = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
    if (!practiceModeBtn || !examModeBtn || !reviewModeBtn) return;
    practiceModeBtn.className = (!isReviewMode && !isExamMode) ? active : inactive;
    examModeBtn.className = (isExamMode && !isReviewMode) ? active : inactive;
    reviewModeBtn.className = isReviewMode ? active : inactive;
}

function getSubjectLabel() {
    const map = {
        'science': scienceBtn,
        'math': mathBtn,
        'biology': biologyBtn,
        'komunikasyon': komunikasyonBtn,
        'effective-comm': effectiveCommBtn,
        'life-career': lifeCareerBtn,
        'pagkas': pagkasBtn
    };
    return map[currentSubject] ? map[currentSubject].textContent.trim() : '';
}

function updateSubjectButtons() {
    const active = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
    const inactive = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
    const map = {
        'science': scienceBtn,
        'math': mathBtn,
        'biology': biologyBtn,
        'komunikasyon': komunikasyonBtn,
        'effective-comm': effectiveCommBtn,
        'life-career': lifeCareerBtn,
        'pagkas': pagkasBtn
    };
    Object.keys(map).forEach(key => {
        if (map[key]) map[key].className = (currentSubject === key) ? active : inactive;
    });
    if (examSubjectPill) examSubjectPill.textContent = getSubjectLabel();
}

// Clears any in-flight briefing / countdown / panel animation.
function resetExamIntro() {
    if (examCountdownTimer) { clearTimeout(examCountdownTimer); examCountdownTimer = null; }
    if (examLeaveTimer) { clearTimeout(examLeaveTimer); examLeaveTimer = null; }
    examPending = false;
    [questionCard, examResult, emptyState, noWrongState].forEach(el => el && el.classList.remove('panel-leave'));
    if (examIntro) {
        examIntro.classList.remove('leaving');
        examIntro.classList.add('hidden');
        examIntro.dataset.phase = 'brief';
    }
}

// Step 1: switch to the exam look and show the briefing. The timer has NOT started yet.
function startExam() {
    stopExamTimer();
    resetExamIntro();
    isExamMode = true;
    isReviewMode = false;
    examSubmitted = false;
    examPending = true;
    examAnswers = {};
    currentQuestionIndex = 0;
    reviewIndex = 0;

    // Start the theme cross-fade right away...
    updateModeButtons();
    updateSubjectButtons();
    updateStats();

    // ...while the current panel lifts away, then the briefing rises in.
    const leaving = [questionCard, examResult, emptyState, noWrongState]
        .find(el => el && !el.classList.contains('hidden'));
    if (leaving) {
        leaving.classList.add('panel-leave');
        examLeaveTimer = setTimeout(() => {
            examLeaveTimer = null;
            leaving.classList.remove('panel-leave');
            if (isExamMode && examPending) renderQuestion();
        }, 240);
    } else {
        renderQuestion();
    }
}

function showExamIntro() {
    [questionCard, emptyState, noWrongState, examResult].forEach(el => el && el.classList.add('hidden'));
    if (submitExamBtn) submitExamBtn.classList.add('hidden');
    if (examTimerWrap) examTimerWrap.classList.add('hidden');

    if (!examIntro) { launchExam(); return; } // markup missing: just start

    if (examIntroSubject) examIntroSubject.textContent = getSubjectLabel();
    if (examIntroCount) examIntroCount.textContent = questions.length;
    if (examIntroTime) examIntroTime.textContent = Math.round(getExamDuration() / 60);

    if (examIntro.classList.contains('hidden')) {
        examIntro.dataset.phase = 'brief';
        examIntro.classList.remove('hidden');
        replayClass(examIntro, 'enter-rise');
        if (examBeginBtn) examBeginBtn.focus({ preventScroll: true });
    }
}

// Step 2: 3 - 2 - 1
function beginExamCountdown() {
    if (!examPending || examCountdownTimer || !examIntro) return;
    examIntro.dataset.phase = 'count';
    let n = 3;
    const tick = () => {
        if (examCountNum) {
            examCountNum.textContent = n;
            replayClass(examCountNum, 'tick');
        }
        examCountdownTimer = setTimeout(() => {
            n--;
            if (n > 0) {
                tick();
            } else {
                examCountdownTimer = null;
                launchExam();
            }
        }, 800);
    };
    tick();
}

// Step 3: fade the briefing out, start the clock, bring in question 1.
function launchExam() {
    if (!examPending) return;
    const begin = () => {
        examLeaveTimer = null;
        if (!examPending) return;
        if (examIntro) {
            examIntro.classList.remove('leaving');
            examIntro.classList.add('hidden');
            examIntro.dataset.phase = 'brief';
        }
        examPending = false;
        startExamTimer();
        renderQuestion();
        updateStats();
        replayClass(questionCard, 'enter-rise');
    };
    if (examIntro && !examIntro.classList.contains('hidden')) {
        examIntro.classList.add('leaving');
        examLeaveTimer = setTimeout(begin, 270);
    } else {
        begin();
    }
}

function getExamProgress() {
    const total = questions.length;
    const answered = Object.keys(examAnswers).length;
    return { answered, total, remaining: total - answered };
}

function updateSubmitButtonState() {
    if (!submitExamBtn) return;
    const { answered, total, remaining } = getExamProgress();
    if (remaining > 0) {
        submitExamBtn.disabled = true;
        submitExamBtn.textContent = `Submit Exam (${remaining} left)`;
    } else {
        submitExamBtn.disabled = false;
        submitExamBtn.textContent = 'Submit Exam';
    }
}

function goToFirstUnanswered() {
    const idx = questions.findIndex(q => examAnswers[q.id] === undefined || examAnswers[q.id] === null);
    if (idx !== -1) {
        const dir = idx >= currentQuestionIndex ? 1 : -1;
        currentQuestionIndex = idx;
        renderQuestion();
        updateStats();
        animateQuestion(dir);
    }
}

function submitExam(force = false) {
    if (!isExamMode || examSubmitted) return false;
    const { remaining } = getExamProgress();
    if (remaining > 0 && !force) {
        goToFirstUnanswered();
        return false;
    }
    examSubmitted = true;
    stopExamTimer();

    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    const newWrong = [];
    questions.forEach(q => {
        const a = examAnswers[q.id];
        if (a === undefined || a === null) {
            unanswered++;
            newWrong.push(q);
        } else if (a === q.correct) {
            correct++;
        } else {
            wrong++;
            newWrong.push(q);
        }
    });
    wrongQuestions = newWrong;
    reviewAnswers = {};

    const total = questions.length;
    const pct = total ? Math.round((correct / total) * 100) : 0;
    questionCount.textContent = `${total} / ${total} Questions`;
    correctCount.textContent = correct;
    wrongCount.textContent = wrong + unanswered;
    progressCircle.style.strokeDashoffset = 0;
    progressText.textContent = `${pct}%`;
    reviewBtn.classList.add('hidden');

    questionCard.classList.add('hidden');
    emptyState.classList.add('hidden');
    noWrongState.classList.add('hidden');
    if (submitExamBtn) submitExamBtn.classList.add('hidden');
    if (examTimerWrap) examTimerWrap.classList.add('hidden');
    if (examResult) {
        examResult.classList.remove('hidden');
        replayClass(examResult, 'enter-rise');
    }
    if (examScoreText) examScoreText.textContent = `You scored ${correct} / ${total}`;
    if (examDetailText) examDetailText.textContent = `${pct}% • ${correct} correct • ${wrong} wrong • ${unanswered} unanswered`;

    updateModeButtons();
    return true;
}

function exitExamToPractice() {
    stopExamTimer();
    resetExamIntro();
    isExamMode = false;
    isReviewMode = false;
    examSubmitted = false;
    examAnswers = {};
    if (examResult) examResult.classList.add('hidden');
    updateModeButtons();
    renderQuestion();
    updateStats();
}

function enterReview() {
    stopExamTimer();
    resetExamIntro();
    isExamMode = false;
    isReviewMode = true;
    reviewIndex = 0;
    if (examResult) examResult.classList.add('hidden');
    updateModeButtons();
    renderQuestion();
}

function setSubject(subject) {
    stopExamTimer();
    resetExamIntro();
    currentSubject = subject;
    currentQuestionIndex = 0;
    userAnswers = {};
    reviewAnswers = {};
    examAnswers = {};
    wrongQuestions = [];
    reviewIndex = 0;
    isReviewMode = false;
    isExamMode = false;
    examSubmitted = false;
    if (examResult) examResult.classList.add('hidden');
    questions = selectRandomQuestions(currentSubject);
    updateModeButtons();
    updateSubjectButtons();
    renderQuestion();
    updateStats();
}

// Setup event listeners
function setupEventListeners() {
    prevBtn.addEventListener('click', () => {
        if (isReviewMode) {
            if (reviewIndex > 0) reviewIndex--;
        } else {
            if (currentQuestionIndex > 0) currentQuestionIndex--;
        }
        renderQuestion();
        if (isExamMode && !isReviewMode) animateQuestion(-1);
    });

    nextBtn.addEventListener('click', () => {
        const currentQuestions = isReviewMode ? wrongQuestions : questions;
        const currentIndex = isReviewMode ? reviewIndex : currentQuestionIndex;
        if (currentIndex >= currentQuestions.length - 1) return;
        if (isReviewMode) {
            reviewIndex++;
        } else {
            currentQuestionIndex++;
        }
        renderQuestion();
        if (isExamMode && !isReviewMode) animateQuestion(1);
    });

    practiceModeBtn.addEventListener('click', () => {
        exitExamToPractice();
    });

    if (examModeBtn) {
        examModeBtn.addEventListener('click', () => {
            if (isExamMode && !isReviewMode) return;
            questions = selectRandomQuestions(currentSubject);
            startExam();
        });
    }

    reviewModeBtn.addEventListener('click', () => {
        if (isExamMode && examPending) {
            enterReview();
            return;
        }
        if (isExamMode && !examSubmitted) {
            if (!submitExam(false) && wrongQuestions.length === 0) return;
            if (wrongQuestions.length > 0) enterReview();
            return;
        }
        enterReview();
    });

    reviewBtn.addEventListener('click', () => {
        enterReview();
    });

    if (examBeginBtn) examBeginBtn.addEventListener('click', beginExamCountdown);
    if (examCancelBtn) examCancelBtn.addEventListener('click', exitExamToPractice);
    if (examCancelBtn2) examCancelBtn2.addEventListener('click', exitExamToPractice);

    if (submitExamBtn) {
        submitExamBtn.addEventListener('click', () => {
            submitExam(false);
        });
    }

    if (examReviewBtn) {
        examReviewBtn.addEventListener('click', () => {
            if (wrongQuestions.length > 0) enterReview();
        });
    }

    if (examRetryBtn) {
        examRetryBtn.addEventListener('click', () => {
            questions = selectRandomQuestions(currentSubject);
            startExam();
        });
    }

    if (examPracticeBtn) {
        examPracticeBtn.addEventListener('click', () => {
            setSubject(currentSubject);
        });
    }

    restartBtn.addEventListener('click', () => {
        if (isExamMode && !isReviewMode) {
            questions = selectRandomQuestions(currentSubject);
            startExam();
        } else {
            setSubject(currentSubject);
            // setSubject reshuffles; re-enter practice explicitly
            exitExamToPractice();
        }
    });

    // Subject selection
    scienceBtn.addEventListener('click', () => setSubject("science"));
    mathBtn.addEventListener('click', () => setSubject("math"));
    biologyBtn.addEventListener('click', () => setSubject("biology"));
    komunikasyonBtn.addEventListener('click', () => setSubject("komunikasyon"));
    effectiveCommBtn.addEventListener('click', () => setSubject("effective-comm"));
    lifeCareerBtn.addEventListener('click', () => setSubject("life-career"));
    pagkasBtn.addEventListener('click', () => setSubject("pagkas"));

    backToPracticeBtn.addEventListener('click', () => {
        exitExamToPractice();
    });
}

// Start the app
init();
