let app;

// ================= GENERATORS =================

// generate textbook topics
function generateFullTopics(subject, topics){
  return topics.map((t, i)=>({
    title: t,

    content: `
${t} is a core topic in ${subject}. This topic is extremely important for WAEC and JAMB examinations and is often tested in both objective and theory sections.

Understanding ${t} requires deep knowledge of its definitions, principles, formulas, and applications. Students must not only memorize but also understand how to apply the concepts to solve real-world and examination problems.

In ${subject}, ${t} plays a foundational role and connects to many other topics. Mastery of this topic ensures strong performance in exams.

You should focus on:
- Definitions and key concepts
- Formula derivations
- Problem-solving techniques
- Real-life applications

Practice consistently and review worked examples to gain full understanding.
`,

    examples: Array.from({length:10}, (_,i)=>
      `${t} Example ${i+1}: Solve and explain a standard exam-level problem related to ${t}.`
    ),

    exercises: Array.from({length:10}, (_,i)=>
      `${t} Exercise ${i+1}: Solve this exam-standard problem on ${t}.`
    )
  }));
}


// generate CBT questions (advanced style)
function generateCBT(subject){
  let arr = [];

  for(let i=0;i<40;i++){
    arr.push({
      q: `${subject} Advanced Question ${i+1}: Solve a standard WAEC/JAMB level problem.`,
      o:["Option A","Option B","Option C","Option D"],
      a:"Option A",
      exp:`This question tests understanding of core ${subject} concepts. Correct answer is Option A based on proper application of principles.`
    });
  }

  return arr;
}


// ================= DATA =================

// ================= REAL STUDY DATA =================

const studyData = {

Math: [

{
title:"Algebra",
content:[
"Algebra is a branch of mathematics that deals with symbols and unknown values.",
"It allows us to form equations and solve problems involving unknown quantities.",
"Expressions can be simplified, expanded, and factorized.",
"Equations are solved by isolating variables using inverse operations.",
"It is foundational for calculus, trigonometry, and advanced mathematics."
],
examples:[
"Solve 2x + 5 = 15 → x = 5",
"Solve 3x - 7 = 11 → x = 6",
"Factorize x² - 5x + 6 → (x-2)(x-3)",
"Expand (x+2)(x+3)",
"Solve x² = 16 → x = ±4",
"Simplify 2x + 3x - x",
"Solve 5x = 20",
"Solve 2x + 3 = x + 9",
"Factorize x² - 9",
"Solve simultaneous equations"
],
exercises:[
"Solve 4x + 8 = 20",
"Factorize x² - 7x + 10",
"Solve 6x - 9 = 3x + 6",
"Simplify 5x - 2x + 7",
"Solve x² - 16 = 0",
"Factorize x² + x - 6",
"Solve 3x + 4 = 19",
"Solve x/2 = 5",
"Solve 7x = 49",
"Simplify algebraic fractions"
]
},

{
title:"Trigonometry",
content:[
"Trigonometry studies relationships between angles and sides of triangles.",
"It is used in physics, navigation, and engineering.",
"The basic ratios are sine, cosine, and tangent.",
"Trigonometric identities help simplify expressions.",
"Angles can be measured in degrees or radians."
],
examples:[
"sin 30° = 0.5",
"cos 60° = 0.5",
"tan 45° = 1",
"sin²θ + cos²θ = 1",
"sin 90° = 1",
"cos 0° = 1",
"tan 0° = 0",
"Find θ if sin θ = 1/2",
"Apply sine rule",
"Apply cosine rule"
],
exercises:[
"Find sin 45°",
"Evaluate cos 30°",
"Find tan 60°",
"Prove sin²θ + cos²θ = 1",
"Find cos 90°",
"Solve sin θ = 0",
"Evaluate tan 30°",
"Solve trig equations",
"Find missing side",
"Simplify trig expressions"
]
},

{
title:"Quadratic Equations",
content:[
"Quadratic equations are of the form ax² + bx + c = 0.",
"They can be solved using factorization, completing the square, or formula.",
"The quadratic formula is x = [-b ± √(b² - 4ac)] / 2a.",
"The discriminant determines the nature of roots.",
"They form parabolic graphs."
],
examples:[
"Solve x² - 5x + 6",
"Solve x² - 9",
"Solve x² + 2x - 3",
"Find discriminant",
"Solve 2x² - 7x + 3",
"Factorize x² + 5x + 6",
"Solve x² - 2x - 8",
"Solve x² + 6x + 9",
"Complete the square",
"Sketch graph"
],
exercises:[
"Solve x² - 4x - 5",
"Solve 2x² + x - 3",
"Factorize x² + 7x + 10",
"Find roots",
"Calculate discriminant",
"Sketch graph",
"Find vertex",
"Find axis",
"Interpret roots",
"Solve equations"
]
},

{
title:"Mensuration",
content:[
"Mensuration deals with measurement of length, area, and volume.",
"It involves shapes like circles, triangles, cylinders, and spheres.",
"Formulas are used to calculate area and volume.",
"It is important in real-life measurements.",
"Accuracy is key in calculations."
],
examples:[
"Area of rectangle = l × b",
"Area of circle = πr²",
"Volume of cube = a³",
"Surface area of sphere",
"Volume of cylinder",
"Area of triangle",
"Perimeter of square",
"Volume of cone",
"Surface area of cuboid",
"Circumference of circle"
],
exercises:[
"Find area of circle",
"Calculate volume of cube",
"Find surface area",
"Calculate perimeter",
"Find volume of cylinder",
"Calculate area of triangle",
"Find circumference",
"Calculate volume of cone",
"Find surface area of sphere",
"Solve mensuration problems"
]
},

{
title:"Statistics",
content:[
"Statistics deals with collection and analysis of data.",
"It includes mean, median, and mode.",
"Data can be grouped or ungrouped.",
"Graphs like bar charts and histograms are used.",
"It helps in decision making."
],
examples:[
"Find mean of numbers",
"Calculate median",
"Determine mode",
"Construct bar chart",
"Calculate range",
"Interpret graph",
"Group data",
"Find frequency",
"Draw histogram",
"Analyze data"
],
exercises:[
"Find mean",
"Calculate median",
"Determine mode",
"Draw graph",
"Interpret data",
"Find range",
"Analyze dataset",
"Construct table",
"Calculate frequency",
"Solve statistics problems"
]
},

{
title:"Probability",
content:[
"Probability measures likelihood of events.",
"It ranges from 0 to 1.",
"It is calculated as favourable outcomes over total outcomes.",
"It is used in games and real-life predictions.",
"It helps in risk assessment."
],
examples:[
"Probability of head = 1/2",
"Probability of dice",
"Find probability of event",
"Complement rule",
"Independent events",
"Dependent events",
"Probability tree",
"Sample space",
"Random experiment",
"Event outcomes"
],
exercises:[
"Find probability",
"Calculate outcomes",
"Use tree diagram",
"Find complement",
"Solve problems",
"Determine sample space",
"Calculate events",
"Use probability formula",
"Interpret probability",
"Solve real-life problems"
]
},

{
title:"Sets",
content:[
"A set is a collection of objects.",
"Sets are represented using braces.",
"Operations include union, intersection, and complement.",
"Venn diagrams are used for representation.",
"It helps in classification."
],
examples:[
"Set A = {1,2,3}",
"Union of sets",
"Intersection",
"Complement",
"Venn diagram",
"Subset",
"Universal set",
"Disjoint sets",
"Cardinality",
"Power set"
],
exercises:[
"Find union",
"Find intersection",
"Draw Venn diagram",
"Determine subsets",
"Find complement",
"Solve set problems",
"Use cardinality",
"Analyze sets",
"Classify sets",
"Solve questions"
]
},

{
title:"Sequences",
content:[
"A sequence is an ordered list of numbers.",
"It can be arithmetic or geometric.",
"Arithmetic sequence has constant difference.",
"Geometric sequence has constant ratio.",
"Formulas help find terms."
],
examples:[
"2,4,6,8",
"Find nth term",
"Arithmetic sequence",
"Geometric sequence",
"Find sum",
"Common difference",
"Common ratio",
"Find next term",
"Series",
"Pattern recognition"
],
exercises:[
"Find nth term",
"Determine sequence",
"Find sum",
"Calculate difference",
"Find ratio",
"Solve sequence problems",
"Analyze pattern",
"Find terms",
"Use formula",
"Solve questions"
]
},

{
title:"Functions",
content:[
"A function relates inputs to outputs.",
"Each input has exactly one output.",
"It is represented as f(x).",
"Functions can be linear or quadratic.",
"Graphs represent functions."
],
examples:[
"f(x)=x+2",
"Evaluate f(2)",
"Graph function",
"Linear function",
"Quadratic function",
"Domain and range",
"Function mapping",
"Inverse function",
"Composite function",
"Transformations"
],
exercises:[
"Evaluate functions",
"Find domain",
"Find range",
"Graph functions",
"Solve function problems",
"Find inverse",
"Compose functions",
"Analyze graph",
"Transform functions",
"Solve equations"
]
},

{
title:"Logarithms",
content:[
"Logarithms are inverse of exponents.",
"log a b = c means a^c = b.",
"They simplify calculations.",
"Log rules are important.",
"They are used in science."
],
examples:[
"log 10 100 = 2",
"log rules",
"Simplify logs",
"Change base",
"Log equations",
"Evaluate logs",
"Natural log",
"Common log",
"Use log tables",
"Convert exponential"
],
exercises:[
"Evaluate logs",
"Simplify expressions",
"Use log rules",
"Solve log equations",
"Convert forms",
"Find values",
"Use base change",
"Calculate logs",
"Analyze problems",
"Solve questions"
]
},

{
title:"Indices",
content:[
"Indices deal with powers and exponents.",
"They simplify multiplication and division.",
"Laws of indices must be applied correctly.",
"They are used in algebra and science.",
"Negative and fractional indices exist."
],
examples:[
"a² × a³ = a⁵",
"(a²)³ = a⁶",
"a⁰ = 1",
"a⁻¹ = 1/a",
"Fractional indices",
"Simplify powers",
"Expand expressions",
"Evaluate exponents",
"Use laws",
"Apply rules"
],
exercises:[
"Simplify indices",
"Use laws",
"Solve equations",
"Evaluate powers",
"Find values",
"Apply rules",
"Simplify expressions",
"Solve problems",
"Analyze indices",
"Practice questions"
]
},

{
title:"Vectors",
content:[
"Vectors have magnitude and direction.",
"They are used in physics and geometry.",
"Vector addition follows triangle law.",
"Vectors can be resolved.",
"They are represented with arrows."
],
examples:[
"Vector addition",
"Resolve vectors",
"Magnitude calculation",
"Direction finding",
"Vector components",
"Dot product",
"Cross product",
"Position vectors",
"Unit vectors",
"Vector equations"
],
exercises:[
"Add vectors",
"Find magnitude",
"Resolve vectors",
"Calculate direction",
"Use components",
"Solve vector problems",
"Apply rules",
"Analyze vectors",
"Find unit vectors",
"Solve questions"
]
},

{
title:"Matrices",
content:[
"Matrices are rectangular arrays of numbers.",
"They are used in solving equations.",
"Matrix operations include addition and multiplication.",
"Determinants are important.",
"They are used in transformations."
],
examples:[
"Matrix addition",
"Matrix multiplication",
"Find determinant",
"Inverse matrix",
"Identity matrix",
"Zero matrix",
"Row operations",
"Solve equations",
"Matrix transpose",
"Applications"
],
exercises:[
"Add matrices",
"Multiply matrices",
"Find determinant",
"Find inverse",
"Solve equations",
"Use matrices",
"Apply operations",
"Analyze matrix",
"Transform data",
"Solve problems"
]
},

{
title:"Geometry",
content:[
"Geometry studies shapes and their properties.",
"It includes angles, lines, and figures.",
"Theorems help solve problems.",
"Shapes include triangles and circles.",
"It is used in construction."
],
examples:[
"Angle sum triangle",
"Parallel lines",
"Circle theorems",
"Polygon angles",
"Area calculation",
"Similarity",
"Congruence",
"Perimeter",
"Diagonals",
"Geometric proofs"
],
exercises:[
"Find angles",
"Use theorems",
"Calculate area",
"Determine properties",
"Solve geometry problems",
"Construct shapes",
"Analyze diagrams",
"Find perimeter",
"Apply rules",
"Solve questions"
]
}

],

// ================= OTHER SUBJECTS (WILL CONTINUE) =================

Physics: [

{
title:"Motion",
content:[
"Motion is the change in position of a body with respect to time.",
"It is described using distance, displacement, speed, velocity, and acceleration.",
"Speed is a scalar quantity while velocity is a vector.",
"Acceleration is the rate of change of velocity.",
"Equations of motion describe uniformly accelerated motion."
],
examples:[
"Speed = distance/time",
"Velocity includes direction",
"A car moving at constant speed",
"A falling object accelerating",
"Uniform motion vs accelerated motion",
"Graph of distance-time",
"Graph of velocity-time",
"Calculate acceleration",
"Find displacement",
"Interpret motion graph"
],
exercises:[
"Define motion",
"Differentiate speed and velocity",
"Calculate acceleration",
"Solve motion equations",
"Draw graphs",
"Find displacement",
"Explain uniform motion",
"Solve problems",
"Interpret graphs",
"Apply formulas"
]
},

{
title:"Vectors",
content:[
"Vectors have both magnitude and direction.",
"They are represented using arrows.",
"Vector addition follows triangle or parallelogram law.",
"Scalars have magnitude only.",
"Vectors are important in physics calculations."
],
examples:[
"Velocity is a vector",
"Force is a vector",
"Add two vectors",
"Resolve vectors",
"Find magnitude",
"Direction calculation",
"Vector components",
"Unit vectors",
"Position vectors",
"Graphical addition"
],
exercises:[
"Define vector",
"Differentiate scalar and vector",
"Add vectors",
"Resolve vectors",
"Find magnitude",
"Calculate direction",
"Solve vector problems",
"Apply triangle law",
"Use components",
"Practice questions"
]
},

{
title:"Forces",
content:[
"Force is any interaction that changes motion.",
"It is measured in Newtons.",
"Types include gravitational, frictional, and normal force.",
"Newton’s laws govern motion.",
"Force = mass × acceleration."
],
examples:[
"Push and pull",
"Friction acting on surface",
"Weight = mg",
"Normal reaction force",
"Applied force",
"Balanced forces",
"Unbalanced forces",
"Acceleration due to force",
"Free body diagram",
"Newton’s laws"
],
exercises:[
"Define force",
"State Newton’s laws",
"Calculate force",
"Draw diagrams",
"Explain friction",
"Find weight",
"Solve problems",
"Identify forces",
"Apply laws",
"Practice questions"
]
},

{
title:"Energy",
content:[
"Energy is the ability to do work.",
"It exists in different forms such as kinetic and potential energy.",
"Kinetic energy depends on motion.",
"Potential energy depends on position.",
"Energy is conserved."
],
examples:[
"Kinetic energy = ½mv²",
"Potential energy = mgh",
"Energy transformation",
"Work done",
"Mechanical energy",
"Heat energy",
"Electrical energy",
"Light energy",
"Energy conservation",
"Power calculation"
],
exercises:[
"Define energy",
"Calculate KE",
"Calculate PE",
"Explain conservation",
"Solve problems",
"Identify forms",
"Calculate work",
"Find power",
"Apply formulas",
"Practice questions"
]
},

{
title:"Heat",
content:[
"Heat is energy transfer due to temperature difference.",
"It flows from hot to cold bodies.",
"Transfer methods include conduction, convection, and radiation.",
"Temperature measures hotness.",
"Heat capacity determines energy required."
],
examples:[
"Boiling water",
"Heat from sun",
"Conduction in metal",
"Convection in air",
"Radiation heat transfer",
"Temperature measurement",
"Thermometer use",
"Expansion of solids",
"Cooling process",
"Heat equations"
],
exercises:[
"Define heat",
"Explain transfer methods",
"Calculate heat",
"Differentiate temperature",
"Solve problems",
"Explain expansion",
"Identify methods",
"Apply formulas",
"Practice questions",
"Interpret data"
]
},

{
title:"Waves",
content:[
"Waves transfer energy without matter movement.",
"They can be transverse or longitudinal.",
"Wave properties include wavelength, frequency, and speed.",
"Wave speed = frequency × wavelength.",
"They are used in sound and light."
],
examples:[
"Sound waves",
"Light waves",
"Water waves",
"Wave equation",
"Frequency calculation",
"Wavelength measurement",
"Wave speed",
"Reflection",
"Refraction",
"Diffraction"
],
exercises:[
"Define wave",
"Differentiate types",
"Calculate wave speed",
"Find frequency",
"Find wavelength",
"Solve problems",
"Explain properties",
"Apply formula",
"Practice questions",
"Interpret diagrams"
]
},

{
title:"Electric Circuits",
content:[
"Electric current is flow of charge.",
"Measured in amperes.",
"Voltage drives current.",
"Resistance opposes current.",
"Ohm’s law: V = IR."
],
examples:[
"Simple circuit",
"Series circuit",
"Parallel circuit",
"Current calculation",
"Voltage measurement",
"Resistance calculation",
"Ohm’s law",
"Electrical power",
"Circuit diagram",
"Battery usage"
],
exercises:[
"Define current",
"Apply Ohm’s law",
"Calculate resistance",
"Solve circuits",
"Draw diagrams",
"Explain series",
"Explain parallel",
"Find voltage",
"Practice problems",
"Analyze circuits"
]
},

{
title:"Magnetism",
content:[
"Magnetism is force due to magnetic fields.",
"Magnets have north and south poles.",
"Like poles repel, unlike attract.",
"Magnetic fields surround magnets.",
"Used in motors and generators."
],
examples:[
"Bar magnet",
"Magnetic field lines",
"Electromagnet",
"Magnetic force",
"Compass",
"Magnet attraction",
"Repulsion",
"Magnetic materials",
"Field strength",
"Applications"
],
exercises:[
"Define magnetism",
"Draw field lines",
"Explain poles",
"Identify materials",
"Solve problems",
"Explain uses",
"Analyze fields",
"Apply concepts",
"Practice questions",
"Interpret diagrams"
]
},

{
title:"Gravitation",
content:[
"Gravitation is force of attraction between masses.",
"It depends on mass and distance.",
"Weight = mass × gravity.",
"Acceleration due to gravity is ~9.8 m/s².",
"It explains planetary motion."
],
examples:[
"Weight calculation",
"Falling objects",
"Planet motion",
"Gravitational force",
"Orbit",
"Mass vs weight",
"g calculation",
"Free fall",
"Satellite motion",
"Applications"
],
exercises:[
"Define gravitation",
"Calculate weight",
"Solve problems",
"Explain motion",
"Differentiate mass",
"Apply formula",
"Practice questions",
"Analyze motion",
"Find g",
"Interpret problems"
]
},

{
title:"Projectile Motion",
content:[
"Projectile motion describes objects moving under gravity.",
"The path is parabolic.",
"Horizontal and vertical motions are independent.",
"Velocity has components.",
"It is used in real-life motion problems."
],
examples:[
"Thrown ball",
"Angle projection",
"Range calculation",
"Time of flight",
"Maximum height",
"Velocity components",
"Parabolic path",
"Horizontal motion",
"Vertical motion",
"Applications"
],
exercises:[
"Define projectile",
"Calculate range",
"Find time",
"Find height",
"Solve problems",
"Resolve velocity",
"Apply formulas",
"Analyze motion",
"Practice questions",
"Interpret graphs"
]
},

{
title:"Momentum",
content:[
"Momentum = mass × velocity.",
"It is conserved in closed systems.",
"Impulse changes momentum.",
"It explains collisions.",
"It is vector quantity."
],
examples:[
"Collision",
"Momentum calculation",
"Impulse",
"Conservation law",
"Elastic collision",
"Inelastic collision",
"Velocity change",
"Force-time relation",
"Applications",
"Examples"
],
exercises:[
"Define momentum",
"Calculate momentum",
"Apply conservation",
"Solve collisions",
"Find impulse",
"Analyze motion",
"Practice problems",
"Use formula",
"Interpret results",
"Solve questions"
]
},

{
title:"Pressure",
content:[
"Pressure = Force / Area.",
"It is measured in Pascals.",
"Liquids exert pressure.",
"Pressure increases with depth.",
"It is used in hydraulics."
],
examples:[
"Pressure calculation",
"Liquid pressure",
"Hydraulic system",
"Atmospheric pressure",
"Depth effect",
"Force distribution",
"Applications",
"Examples",
"Measurement",
"Units"
],
exercises:[
"Define pressure",
"Calculate pressure",
"Explain depth",
"Solve problems",
"Analyze fluids",
"Apply formula",
"Practice questions",
"Interpret data",
"Find force",
"Solve equations"
]
},

{
title:"Elasticity",
content:[
"Elasticity is ability to return to original shape.",
"Hooke’s law applies.",
"Force proportional to extension.",
"Elastic limit exists.",
"Used in springs."
],
examples:[
"Spring extension",
"Hooke’s law",
"Elastic materials",
"Force-extension graph",
"Applications",
"Examples",
"Stretching",
"Compression",
"Energy storage",
"Real-life use"
],
exercises:[
"Define elasticity",
"Apply Hooke’s law",
"Calculate force",
"Solve problems",
"Draw graph",
"Analyze materials",
"Practice questions",
"Find extension",
"Solve equations",
"Interpret graphs"
]
},

{
title:"Optics",
content:[
"Optics studies light.",
"Includes reflection and refraction.",
"Mirrors and lenses form images.",
"Light travels in straight line.",
"It explains vision."
],
examples:[
"Reflection",
"Refraction",
"Lens image",
"Mirror image",
"Ray diagrams",
"Light behavior",
"Applications",
"Examples",
"Optical devices",
"Vision"
],
exercises:[
"Define optics",
"Draw ray diagram",
"Explain reflection",
"Explain refraction",
"Solve problems",
"Analyze lenses",
"Practice questions",
"Find image",
"Apply rules",
"Interpret diagrams"
]
},

{
title:"Measurement",
content:[
"Measurement involves determining physical quantities.",
"Units are standardized.",
"SI units are used globally.",
"Accuracy and precision are important.",
"Instruments measure values."
],
examples:[
"Length measurement",
"Mass measurement",
"Time measurement",
"SI units",
"Precision",
"Accuracy",
"Errors",
"Instruments",
"Units conversion",
"Examples"
],
exercises:[
"Define measurement",
"List SI units",
"Convert units",
"Solve problems",
"Analyze errors",
"Use instruments",
"Practice questions",
"Interpret data",
"Find values",
"Solve equations"
]
}

],
Chemistry: [

{
title:"Atomic Structure",
content:`Atomic structure deals with the internal composition of atoms. Every atom is made up of protons, neutrons, and electrons. Protons carry positive charge, electrons carry negative charge, and neutrons are neutral.

The atomic number represents the number of protons in an atom, while the mass number is the sum of protons and neutrons.

Electrons are arranged in shells (energy levels) around the nucleus. These shells follow the rule 2n², where n is the shell number.

Understanding atomic structure helps explain chemical reactions, bonding, and properties of elements.`,
examples:[
"Atomic number of oxygen is 8",
"Mass number = protons + neutrons",
"Electron configuration of Na = 2,8,1",
"Isotope example: Carbon-12 and Carbon-14",
"Neutrons = mass number - atomic number",
"Electron shells arrangement",
"Identify subatomic particles",
"Define ions from atoms",
"Determine atomic structure",
"Compare isotopes"
],
exercises:[
"Define atomic structure",
"State properties of protons",
"State properties of electrons",
"Explain isotopes",
"Calculate neutrons in atoms",
"Write electron configuration",
"Explain shell model",
"Define atomic number",
"Define mass number",
"Differentiate ions and atoms"
]
},

{
title:"Periodic Table",
content:`The periodic table organizes elements based on atomic number and recurring chemical properties.

Elements are arranged in periods (horizontal rows) and groups (vertical columns). Elements in the same group share similar chemical properties.

Metals are found on the left, non-metals on the right, and metalloids lie in between.

Periodic trends include atomic size, electronegativity, and ionization energy.`,
examples:[
"Group 1 elements are alkali metals",
"Group 17 are halogens",
"Group 18 are noble gases",
"Metals conduct electricity",
"Non-metals are poor conductors",
"Atomic size increases down a group",
"Reactivity trends",
"Electronegativity trends",
"Metal vs non-metal properties",
"Periodic classification"
],
exercises:[
"Define periodic table",
"Explain groups and periods",
"Differentiate metals and non-metals",
"State periodic trends",
"Explain atomic size trend",
"Explain electronegativity",
"Give examples of groups",
"Classify elements",
"Explain reactivity trends",
"Draw simple periodic table"
]
},

{
title:"Chemical Bonding",
content:`Chemical bonding is the force that holds atoms together in compounds.

Ionic bonding involves transfer of electrons from one atom to another. Covalent bonding involves sharing of electrons. Metallic bonding involves free-moving electrons.

Bonding determines physical properties such as melting point, boiling point, and conductivity.`,
examples:[
"NaCl ionic bonding",
"H2 covalent bonding",
"Metal bonding in iron",
"CO2 covalent structure",
"Oxygen molecule bonding",
"Electron transfer",
"Electron sharing",
"Ionic compound formation",
"Bond type identification",
"Metallic bonding behavior"
],
exercises:[
"Define ionic bonding",
"Define covalent bonding",
"Explain metallic bonding",
"Compare bond types",
"Give examples",
"Draw bonding diagrams",
"Explain electron transfer",
"Explain electron sharing",
"Predict bonding type",
"State properties"
]
},

{
title:"Acids, Bases and Salts",
content:`Acids release hydrogen ions (H+) in solution, while bases release hydroxide ions (OH-).

The pH scale measures acidity and alkalinity from 0 to 14. Neutral substances have pH 7.

Salts are formed when acids react with bases in neutralization reactions.`,
examples:[
"HCl is an acid",
"NaOH is a base",
"NaCl is a salt",
"pH of water is 7",
"Litmus turns red in acid",
"Neutralization reaction",
"Strong vs weak acids",
"Examples of bases",
"Indicators usage",
"Acid-base reactions"
],
exercises:[
"Define acids",
"Define bases",
"Explain pH scale",
"Give examples",
"Explain neutralization",
"Differentiate strong/weak acids",
"List indicators",
"Explain reactions",
"State properties",
"Compare acids and bases"
]
},

{
title:"Stoichiometry",
content:`Stoichiometry involves calculation of quantities in chemical reactions using balanced equations.

It helps determine moles, masses, and volumes of reactants and products.

Balanced equations follow the law of conservation of mass.`,
examples:[
"2H2 + O2 → 2H2O",
"Mole calculations",
"Mass calculations",
"Volume relationships",
"Balancing equations",
"Mole ratios",
"Chemical quantities",
"Reaction proportions",
"Mass conversions",
"Gas calculations"
],
exercises:[
"Balance equations",
"Calculate moles",
"Convert mass to moles",
"Find limiting reagent",
"Calculate products",
"Use mole ratios",
"Solve stoichiometric problems",
"Convert units",
"Explain conservation law",
"Practice calculations"
]
},

{
title:"Gas Laws",
content:`Gas laws describe relationships between pressure, volume, and temperature.

Boyle’s law: Pressure inversely proportional to volume.  
Charles’ law: Volume proportional to temperature.  
Combined gas law relates all variables.`,
examples:[
"PV = constant",
"V/T = constant",
"Gas expansion",
"Compression",
"Temperature effect",
"Pressure changes",
"Real-life gas examples",
"Balloon expansion",
"Syringe compression",
"Gas calculations"
],
exercises:[
"State Boyle’s law",
"State Charles’ law",
"Solve gas problems",
"Convert temperature",
"Calculate pressure",
"Explain volume changes",
"Apply formulas",
"Use combined law",
"Practice calculations",
"Interpret graphs"
]
},

{
title:"Electrolysis",
content:`Electrolysis is the decomposition of compounds using electricity.

It involves movement of ions to electrodes where oxidation and reduction occur.`,
examples:[
"Electrolysis of water",
"Electrolysis of NaCl",
"Electrode reactions",
"Ion movement",
"Anode and cathode",
"Redox process",
"Gas production",
"Metal extraction",
"Industrial applications",
"Electrochemical cells"
],
exercises:[
"Define electrolysis",
"Explain electrode reactions",
"Identify ions",
"State oxidation",
"State reduction",
"Explain applications",
"Draw setup",
"Predict products",
"Explain ion movement",
"Practice equations"
]
},

{
title:"Organic Chemistry",
content:`Organic chemistry studies carbon compounds.

Hydrocarbons include alkanes, alkenes, and alkynes. These compounds form the basis of fuels and many industrial chemicals.`,
examples:[
"Methane (CH4)",
"Ethene (C2H4)",
"Alkane structure",
"Alkene reactions",
"Combustion",
"Polymerization",
"Organic compounds",
"Functional groups",
"Hydrocarbon chains",
"Industrial uses"
],
exercises:[
"Define organic chemistry",
"Classify hydrocarbons",
"Write formulas",
"Explain reactions",
"Draw structures",
"Give examples",
"Explain uses",
"Identify compounds",
"Compare types",
"Practice questions"
]
},

{
title:"Solutions and Solubility",
content:`Solutions are homogeneous mixtures of solutes and solvents.

Solubility depends on temperature and nature of substances.`,
examples:[
"Salt in water",
"Sugar solution",
"Solubility curves",
"Saturated solution",
"Unsaturated solution",
"Concentration",
"Dilution",
"Solvent types",
"Solution preparation",
"Real-life examples"
],
exercises:[
"Define solution",
"Explain solubility",
"Differentiate types",
"Calculate concentration",
"Explain dilution",
"Use solubility curve",
"Give examples",
"Explain temperature effect",
"Prepare solutions",
"Practice problems"
]
},

{
title:"Redox Reactions",
content:`Redox reactions involve transfer of electrons.

Oxidation is loss of electrons, reduction is gain of electrons.`,
examples:[
"Rusting of iron",
"Combustion",
"Electron transfer",
"Redox pairs",
"Chemical reactions",
"Oxidation states",
"Reduction process",
"Industrial reactions",
"Energy changes",
"Reaction examples"
],
exercises:[
"Define oxidation",
"Define reduction",
"Identify redox reactions",
"Explain examples",
"Calculate oxidation states",
"Balance equations",
"Give applications",
"Explain processes",
"Practice questions",
"Compare reactions"
]
},
{
title:"Thermochemistry",
content:`Thermochemistry deals with heat energy changes during chemical reactions. Reactions can either release heat (exothermic) or absorb heat (endothermic).

Exothermic reactions release heat to the surroundings, causing temperature increase. Endothermic reactions absorb heat, causing temperature decrease.

Energy changes are measured in kilojoules (kJ). Understanding thermochemistry helps explain fuel usage, combustion, and industrial processes.`,
examples:[
"Combustion of fuel releases heat",
"Photosynthesis absorbs energy",
"Burning wood is exothermic",
"Melting ice is endothermic",
"Energy profile diagrams",
"Heat change calculations",
"Reaction enthalpy",
"Energy transfer",
"Industrial reactions",
"Thermal decomposition"
],
exercises:[
"Define thermochemistry",
"Differentiate exothermic and endothermic",
"Give examples of each",
"Explain heat transfer",
"Draw energy diagrams",
"Calculate energy change",
"Explain combustion",
"Explain decomposition",
"State applications",
"Solve related problems"
]
},

{
title:"Equilibrium",
content:`Chemical equilibrium occurs when the rate of forward reaction equals the rate of backward reaction.

At equilibrium, reactants and products are present in constant concentrations.

Le Chatelier’s principle explains how systems respond to changes in pressure, temperature, and concentration.`,
examples:[
"Reversible reactions",
"Dynamic equilibrium",
"Effect of temperature",
"Effect of pressure",
"Effect of concentration",
"Industrial equilibrium",
"Haber process",
"Equilibrium shift",
"Closed system behavior",
"Reaction balance"
],
exercises:[
"Define equilibrium",
"Explain reversible reactions",
"State Le Chatelier principle",
"Predict equilibrium shift",
"Explain temperature effect",
"Explain pressure effect",
"Give examples",
"Explain industrial use",
"Draw diagrams",
"Solve equilibrium problems"
]
},

{
title:"Hydrocarbons",
content:`Hydrocarbons are organic compounds made of hydrogen and carbon only.

They are classified into alkanes (single bonds), alkenes (double bonds), and alkynes (triple bonds).

Hydrocarbons are used as fuels and raw materials in industries.`,
examples:[
"Methane CH4",
"Ethene C2H4",
"Ethyne C2H2",
"Combustion reactions",
"Crude oil products",
"Petroleum refining",
"Fuel usage",
"Bond structures",
"Organic reactions",
"Industrial applications"
],
exercises:[
"Define hydrocarbons",
"Classify hydrocarbons",
"Write formulas",
"Explain reactions",
"Give examples",
"Explain uses",
"Draw structures",
"Compare types",
"Explain combustion",
"Solve questions"
]
},

{
title:"Carbon Compounds",
content:`Carbon forms a wide variety of compounds due to its ability to form long chains and rings.

These compounds include alcohols, acids, esters, and polymers.

Carbon chemistry is essential in life processes and industrial applications.`,
examples:[
"Ethanol (alcohol)",
"Ethanoic acid",
"Esters formation",
"Polymer examples",
"Carbon chains",
"Functional groups",
"Organic reactions",
"Industrial chemicals",
"Fuel compounds",
"Biological molecules"
],
exercises:[
"Define carbon compounds",
"Give examples",
"Explain bonding in carbon",
"Describe functional groups",
"Explain uses",
"Classify compounds",
"Draw structures",
"Explain reactions",
"Give applications",
"Solve problems"
]
},

{
title:"Salts",
content:`Salts are formed when acids react with bases in a neutralization reaction.

They can be neutral, acidic, or basic depending on the strength of the acid and base used.

Salts are widely used in industry, medicine, and agriculture.`,
examples:[
"NaCl (common salt)",
"Ammonium chloride",
"Sodium sulfate",
"Salt formation reactions",
"Neutralization",
"Industrial salts",
"Fertilizers",
"Medical salts",
"Food salts",
"Chemical uses"
],
exercises:[
"Define salts",
"Explain formation",
"Classify salts",
"Give examples",
"Explain properties",
"Describe uses",
"Write equations",
"Explain neutralization",
"State importance",
"Solve problems"
]
}



],
Biology: [

{
title:"Cell Structure",
content:`The cell is the basic structural and functional unit of life. All living organisms are composed of cells. Cells carry out essential processes such as metabolism, growth, and reproduction.

Cells contain organelles such as the nucleus, mitochondria, ribosomes, and cytoplasm. The nucleus controls activities, mitochondria generate energy, and ribosomes synthesize proteins.

There are two main types of cells: prokaryotic (without nucleus) and eukaryotic (with nucleus). Understanding cell structure is fundamental to biology.`,
examples:[
"Plant cell contains cell wall and chloroplast",
"Animal cell lacks cell wall",
"Nucleus controls activities",
"Mitochondria produce energy",
"Ribosomes make proteins",
"Cytoplasm is site of reactions",
"Cell membrane controls movement",
"Prokaryotic vs eukaryotic cells",
"Organelles functions",
"Cell diagrams"
],
exercises:[
"Define cell",
"List cell organelles",
"Explain nucleus function",
"Differentiate plant and animal cells",
"Explain mitochondria role",
"Describe ribosomes",
"Explain cytoplasm",
"Draw a cell diagram",
"Define prokaryotic cell",
"Define eukaryotic cell"
]
},

{
title:"Cell Division",
content:`Cell division is the process by which a cell divides into new cells. It is essential for growth, repair, and reproduction.

There are two types: mitosis and meiosis. Mitosis produces identical cells, while meiosis produces gametes with half the chromosome number.

Chromosomes carry genetic information and are duplicated before division.`,
examples:[
"Mitosis in body cells",
"Meiosis in gametes",
"Chromosome duplication",
"Cell growth",
"Tissue repair",
"Gamete formation",
"Reduction division",
"DNA replication",
"Stages of mitosis",
"Cell cycle"
],
exercises:[
"Define cell division",
"Explain mitosis",
"Explain meiosis",
"Differentiate both",
"State stages of mitosis",
"Explain chromosome behavior",
"Define gametes",
"Explain DNA replication",
"Describe cell cycle",
"Give examples"
]
},

{
title:"Genetics",
content:`Genetics is the study of heredity and variation. Traits are passed from parents to offspring through genes.

Genes are located on chromosomes. Dominant traits mask recessive traits. Gregor Mendel established laws of inheritance.

Genotype refers to genetic makeup, while phenotype refers to observable traits.`,
examples:[
"Tall vs short plants",
"Eye color inheritance",
"Dominant traits",
"Recessive traits",
"Genotype vs phenotype",
"Mendel experiments",
"Inheritance patterns",
"Family resemblance",
"Genetic variation",
"Traits transmission"
],
exercises:[
"Define genetics",
"Explain heredity",
"Differentiate genotype and phenotype",
"State Mendel laws",
"Give examples of traits",
"Explain dominant traits",
"Explain recessive traits",
"Describe inheritance",
"Give real-life examples",
"Explain variation"
]
},

{
title:"Nutrition",
content:`Nutrition is the process by which organisms obtain and use food for growth and energy.

Plants are autotrophs and make their own food through photosynthesis. Animals are heterotrophs and depend on other organisms.

Nutrients include carbohydrates, proteins, fats, vitamins, and minerals.`,
examples:[
"Plants perform photosynthesis",
"Animals eat food",
"Carbohydrates provide energy",
"Proteins build tissues",
"Vitamins regulate body",
"Minerals support growth",
"Balanced diet",
"Food classes",
"Energy production",
"Nutritional deficiency"
],
exercises:[
"Define nutrition",
"Explain photosynthesis",
"List food classes",
"Explain functions",
"Define balanced diet",
"Give examples",
"Explain deficiency diseases",
"Describe plant nutrition",
"Describe animal nutrition",
"State importance"
]
},

{
title:"Photosynthesis",
content:`Photosynthesis is the process by which green plants make food using sunlight, carbon dioxide, and water.

It occurs in chloroplasts and produces glucose and oxygen.

The equation is: CO₂ + H₂O → Glucose + O₂ (in presence of sunlight and chlorophyll).`,
examples:[
"Green plants make food",
"Oxygen released",
"Sunlight required",
"Chlorophyll absorbs light",
"Carbon dioxide used",
"Glucose produced",
"Plant growth",
"Energy storage",
"Photosynthesis process",
"Leaf function"
],
exercises:[
"Define photosynthesis",
"Write equation",
"Explain process",
"List requirements",
"State products",
"Explain importance",
"Describe chlorophyll",
"Explain sunlight role",
"Give examples",
"Draw diagram"
]
},

{
title:"Respiration",
content:`Respiration is the process by which organisms release energy from food.

There are two types: aerobic (with oxygen) and anaerobic (without oxygen).

Energy is released in the form of ATP.`,
examples:[
"Breathing in humans",
"Aerobic respiration",
"Anaerobic respiration",
"Energy release",
"Glucose breakdown",
"Muscle respiration",
"Oxygen use",
"Carbon dioxide release",
"Cellular respiration",
"Energy production"
],
exercises:[
"Define respiration",
"Differentiate types",
"Explain aerobic respiration",
"Explain anaerobic respiration",
"Write equation",
"State importance",
"Give examples",
"Explain energy release",
"Describe process",
"Solve questions"
]
},

{
title:"Circulatory System",
content:`The circulatory system transports substances such as oxygen, nutrients, and waste products throughout the body.

It consists of the heart, blood, and blood vessels.

The heart pumps blood, arteries carry blood away, and veins return blood to the heart.`,
examples:[
"Heart pumping blood",
"Arteries carry oxygen",
"Veins return blood",
"Blood components",
"Red blood cells",
"White blood cells",
"Platelets",
"Circulation process",
"Oxygen transport",
"Nutrient distribution"
],
exercises:[
"Define circulatory system",
"Name parts",
"Explain heart function",
"Differentiate arteries and veins",
"Describe blood components",
"Explain circulation",
"Give examples",
"State functions",
"Draw diagram",
"Solve questions"
]
},

{
title:"Excretion",
content:`Excretion is the removal of metabolic waste from the body.

Organs involved include kidneys, lungs, and skin.

Waste products include urea, carbon dioxide, and excess salts.`,
examples:[
"Kidneys remove urea",
"Lungs remove CO₂",
"Skin removes sweat",
"Urine formation",
"Excretory organs",
"Waste removal",
"Body regulation",
"Metabolic waste",
"Homeostasis",
"Excretion process"
],
exercises:[
"Define excretion",
"Name organs",
"Explain kidney function",
"Describe urine formation",
"List waste products",
"Explain lungs role",
"Explain skin role",
"Give examples",
"State importance",
"Solve questions"
]
},

{
title:"Ecology",
content:`Ecology studies interactions between organisms and their environment.

It includes ecosystems, food chains, and energy flow.

Organisms depend on each other for survival.`,
examples:[
"Food chain",
"Food web",
"Ecosystem",
"Producers and consumers",
"Energy flow",
"Habitat",
"Population",
"Community",
"Environmental interaction",
"Natural balance"
],
exercises:[
"Define ecology",
"Explain ecosystem",
"Draw food chain",
"Explain food web",
"Define habitat",
"Define population",
"Explain energy flow",
"Give examples",
"Describe interactions",
"Solve questions"
]
},

{
title:"Reproduction",
content:`Reproduction is the process by which organisms produce offspring.

It can be sexual or asexual.

Sexual reproduction involves fusion of gametes, while asexual involves one parent.`,
examples:[
"Human reproduction",
"Plant reproduction",
"Sexual reproduction",
"Asexual reproduction",
"Gamete formation",
"Fertilization",
"Growth of offspring",
"Life cycle",
"Organism reproduction",
"Biological continuity"
],
exercises:[
"Define reproduction",
"Differentiate types",
"Explain sexual reproduction",
"Explain asexual reproduction",
"Give examples",
"Explain fertilization",
"Describe life cycle",
"State importance",
"Draw diagrams",
"Solve questions"
]
},
,
{
title:"Nervous System",
content:`The nervous system controls and coordinates body activities. It consists of the brain, spinal cord, and nerves.

It receives stimuli from the environment and responds through effectors such as muscles and glands.

Neurons are specialized cells that transmit nerve impulses. The system ensures quick response and communication within the body.`,
examples:[
"Brain controls thinking",
"Spinal cord controls reflex actions",
"Nerves transmit impulses",
"Reflex action example",
"Response to heat",
"Sense organs detect stimuli",
"Motor neuron action",
"Coordination of body",
"Nerve signal transmission",
"Reaction to environment"
],
exercises:[
"Define nervous system",
"Name its parts",
"Explain neuron function",
"Describe reflex action",
"Explain brain function",
"State roles of spinal cord",
"Explain stimulus and response",
"Give examples",
"Draw neuron diagram",
"Solve questions"
]
},

{
title:"Endocrine System",
content:`The endocrine system controls body functions using hormones. Hormones are chemical messengers released by glands.

Major glands include pituitary, thyroid, adrenal, and pancreas.

Hormones regulate growth, metabolism, and reproduction. Unlike nerves, hormonal responses are slower but long-lasting.`,
examples:[
"Insulin regulates sugar",
"Adrenaline prepares body for action",
"Thyroxine controls metabolism",
"Growth hormone effect",
"Hormonal imbalance",
"Gland functions",
"Endocrine coordination",
"Body regulation",
"Chemical signaling",
"Long-term control"
],
exercises:[
"Define hormones",
"List endocrine glands",
"Explain functions",
"Differentiate endocrine and nervous system",
"Give examples",
"Explain insulin role",
"Explain adrenaline",
"Describe hormonal control",
"State importance",
"Solve questions"
]
},

{
title:"Transport System",
content:`The transport system ensures movement of substances within organisms.

In plants, transport occurs through xylem (water) and phloem (food). In animals, it occurs through blood vessels.

Efficient transport supports survival, growth, and metabolism.`,
examples:[
"Xylem carries water",
"Phloem carries food",
"Blood transports oxygen",
"Circulatory transport",
"Nutrient distribution",
"Waste movement",
"Plant transport system",
"Animal transport system",
"Fluid movement",
"Internal transport"
],
exercises:[
"Define transport system",
"Explain plant transport",
"Explain animal transport",
"Differentiate xylem and phloem",
"Give examples",
"Explain functions",
"Describe movement of substances",
"State importance",
"Draw diagrams",
"Solve questions"
]
},

{
title:"Growth",
content:`Growth is the increase in size and mass of an organism. It occurs through cell division and enlargement.

Growth can be measured using parameters such as height, weight, and volume.

Factors affecting growth include nutrition, hormones, and environment.`,
examples:[
"Increase in height",
"Weight gain",
"Cell multiplication",
"Plant growth",
"Human development",
"Growth stages",
"Hormonal influence",
"Environmental factors",
"Growth measurement",
"Biological growth"
],
exercises:[
"Define growth",
"Explain growth processes",
"List factors affecting growth",
"Give examples",
"Explain measurement",
"Describe stages",
"Explain role of hormones",
"State importance",
"Draw growth curve",
"Solve questions"
]
},

{
title:"Adaptation",
content:`Adaptation refers to features that enable organisms to survive in their environment.

Adaptations can be structural, behavioral, or physiological.

These features help organisms obtain food, avoid predators, and reproduce successfully.`,
examples:[
"Camouflage in animals",
"Long neck of giraffe",
"Thick fur in cold regions",
"Behavioral migration",
"Desert plant adaptation",
"Water conservation",
"Protective coloration",
"Survival strategies",
"Environmental adjustment",
"Organism survival"
],
exercises:[
"Define adaptation",
"List types",
"Give examples",
"Explain survival advantages",
"Describe structural adaptation",
"Describe behavioral adaptation",
"Explain physiological adaptation",
"State importance",
"Compare organisms",
"Solve questions"
]
},

{
title:"Variation",
content:`Variation refers to differences among individuals of the same species.

It can be genetic or environmental.

Variation is important for evolution and survival.`,
examples:[
"Different heights",
"Different skin colors",
"Genetic traits",
"Environmental influence",
"Family resemblance",
"Individual differences",
"Species diversity",
"Natural variation",
"Trait differences",
"Biological variation"
],
exercises:[
"Define variation",
"Explain types",
"Give examples",
"Differentiate genetic/environmental",
"Explain importance",
"Describe causes",
"State effects",
"Compare individuals",
"Explain inheritance",
"Solve questions"
]
},

{
title:"Evolution",
content:`Evolution is the gradual change in species over time.

It occurs through natural selection, where organisms with favorable traits survive and reproduce.

Evolution explains diversity of life and adaptation.`,
examples:[
"Darwin theory",
"Natural selection",
"Survival of fittest",
"Species adaptation",
"Environmental changes",
"Evolution of organisms",
"Genetic variation",
"Selection process",
"Biological changes",
"Species development"
],
exercises:[
"Define evolution",
"Explain natural selection",
"Give examples",
"Describe process",
"Explain adaptation",
"State importance",
"Compare species",
"Explain survival",
"Describe Darwin theory",
"Solve questions"
]
},

{
title:"Ecosystem",
content:`An ecosystem consists of living organisms interacting with their environment.

It includes biotic (living) and abiotic (non-living) components.

Energy flows through ecosystems via food chains and food webs.`,
examples:[
"Forest ecosystem",
"Aquatic ecosystem",
"Food chains",
"Energy flow",
"Biotic factors",
"Abiotic factors",
"Environmental interaction",
"Ecosystem balance",
"Natural habitats",
"Organism relationships"
],
exercises:[
"Define ecosystem",
"Explain components",
"Give examples",
"Draw food chain",
"Explain energy flow",
"Describe interactions",
"State importance",
"Explain balance",
"Compare ecosystems",
"Solve questions"
]
}

],
English: [

{
title:"Parts of Speech",
content:`Parts of speech are categories of words based on their functions in sentences. The main parts include noun, pronoun, verb, adjective, adverb, preposition, conjunction, and interjection.

Understanding parts of speech helps in sentence construction, grammar accuracy, and comprehension.

Each part plays a specific role: nouns name things, verbs show action, adjectives describe, etc.`,
examples:[
"Noun: The boy is happy",
"Verb: She runs fast",
"Adjective: A tall building",
"Adverb: He speaks loudly",
"Pronoun: They are here",
"Preposition: On the table",
"Conjunction: And, but, because",
"Interjection: Wow!",
"Identify parts in sentences",
"Classify words"
],
exercises:[
"Define parts of speech",
"List all parts",
"Identify nouns in sentences",
"Identify verbs",
"Identify adjectives",
"Classify given words",
"Use each part in sentence",
"Correct wrong usage",
"Explain functions",
"Solve grammar questions"
]
},

{
title:"Nouns",
content:`Nouns are words used to name people, places, animals, things, or ideas.

Types include proper nouns, common nouns, abstract nouns, collective nouns, and countable/uncountable nouns.

Nouns can function as subjects or objects in sentences.`,
examples:[
"Proper noun: Lagos",
"Common noun: city",
"Abstract noun: happiness",
"Collective noun: team",
"Countable noun: books",
"Uncountable noun: water",
"Subject noun usage",
"Object noun usage",
"Noun phrases",
"Identify nouns"
],
exercises:[
"Define noun",
"List types",
"Give examples",
"Identify nouns",
"Differentiate types",
"Use nouns in sentences",
"Explain functions",
"Correct errors",
"Form plural nouns",
"Solve questions"
]
},

{
title:"Verbs",
content:`Verbs are action or state words. They describe what the subject does or is.

Types include action verbs, linking verbs, and auxiliary verbs.

Verbs change form based on tense, number, and subject.`,
examples:[
"Run, jump (action)",
"Is, are (linking)",
"Have, has (auxiliary)",
"Present tense verbs",
"Past tense verbs",
"Future tense verbs",
"Verb agreement",
"Sentence examples",
"Verb phrases",
"Identify verbs"
],
exercises:[
"Define verb",
"List types",
"Give examples",
"Identify verbs",
"Change tense",
"Correct agreement",
"Use verbs properly",
"Explain types",
"Form sentences",
"Solve questions"
]
},

{
title:"Adjectives",
content:`Adjectives describe or modify nouns. They provide information about size, color, quantity, and quality.

They can appear before nouns or after linking verbs.

They also have degrees: positive, comparative, and superlative.`,
examples:[
"Tall boy",
"Beautiful girl",
"Bigger house",
"Smartest student",
"Color description",
"Size comparison",
"Quantity description",
"Quality description",
"Sentence usage",
"Comparison forms"
],
exercises:[
"Define adjectives",
"Identify adjectives",
"Form comparatives",
"Form superlatives",
"Use in sentences",
"Correct errors",
"Describe objects",
"Compare items",
"Explain usage",
"Solve questions"
]
},

{
title:"Adverbs",
content:`Adverbs modify verbs, adjectives, or other adverbs. They tell how, when, where, or to what extent something happens.

They often end in -ly but not always.`,
examples:[
"He runs quickly",
"She speaks softly",
"They arrived early",
"Place adverbs",
"Time adverbs",
"Manner adverbs",
"Frequency adverbs",
"Sentence examples",
"Modify verbs",
"Modify adjectives"
],
exercises:[
"Define adverbs",
"Identify adverbs",
"Use in sentences",
"Explain types",
"Correct usage",
"Form adverbs",
"Compare adverbs",
"Modify sentences",
"Give examples",
"Solve questions"
]
},

{
title:"Tenses",
content:`Tenses show the time of an action. The main tenses are present, past, and future.

Each tense has subtypes such as simple, continuous, perfect, and perfect continuous.

Correct tense usage is essential for clear communication.`,
examples:[
"Present: I eat",
"Past: I ate",
"Future: I will eat",
"Continuous tense",
"Perfect tense",
"Sentence examples",
"Time expressions",
"Verb changes",
"Tense agreement",
"Usage in context"
],
exercises:[
"Define tense",
"List types",
"Convert sentences",
"Use correct tense",
"Identify tense",
"Explain usage",
"Correct errors",
"Form sentences",
"Give examples",
"Solve questions"
]
},

{
title:"Concord (Subject-Verb Agreement)",
content:`Concord refers to agreement between subject and verb in number and person.

Singular subjects take singular verbs, while plural subjects take plural verbs.

Errors in concord are common in exams.`,
examples:[
"He runs (correct)",
"They run (correct)",
"Singular agreement",
"Plural agreement",
"Collective nouns",
"Indefinite pronouns",
"Sentence examples",
"Correct usage",
"Common mistakes",
"Agreement rules"
],
exercises:[
"Define concord",
"Explain rules",
"Correct sentences",
"Identify errors",
"Use properly",
"Give examples",
"Apply rules",
"Rewrite sentences",
"Test agreement",
"Solve questions"
]
},

{
title:"Prepositions",
content:`Prepositions show relationship between nouns/pronouns and other words.

They indicate position, direction, time, and manner.`,
examples:[
"In the room",
"On the table",
"Under the chair",
"At school",
"Between two objects",
"Direction examples",
"Time examples",
"Position examples",
"Usage in sentences",
"Prepositional phrases"
],
exercises:[
"Define prepositions",
"Give examples",
"Use correctly",
"Identify in sentences",
"Explain types",
"Correct usage",
"Form sentences",
"Fill blanks",
"Practice questions",
"Solve exercises"
]
},

{
title:"Comprehension",
content:`Comprehension tests the ability to read and understand passages.

Students must identify main ideas, themes, tone, and answer questions based on the text.`,
examples:[
"Identify main idea",
"Summarize passage",
"Answer questions",
"Find meanings",
"Interpret tone",
"Infer ideas",
"Analyze text",
"Read passages",
"Extract information",
"Understand context"
],
exercises:[
"Read passage",
"Answer questions",
"Summarize text",
"Find meanings",
"Identify theme",
"Explain tone",
"Give answers",
"Interpret ideas",
"Analyze passage",
"Practice comprehension"
]
},

{
title:"Summary Writing",
content:`Summary writing involves reducing a passage to its key points without losing meaning.

It requires identifying main ideas and removing unnecessary details.`,
examples:[
"Shorten passage",
"Extract key ideas",
"Use own words",
"Remove repetition",
"Clear writing",
"Concise sentences",
"Main points",
"Important ideas",
"Logical order",
"Summary examples"
],
exercises:[
"Define summary",
"Summarize passage",
"Identify key ideas",
"Rewrite text",
"Use own words",
"Practice writing",
"Reduce sentences",
"Organize ideas",
"Give examples",
"Solve questions"
]
},

{
title:"Sentence Structure",
content:`Sentence structure refers to arrangement of words to form meaningful sentences.

Types include simple, compound, complex, and compound-complex sentences.`,
examples:[
"Simple sentence",
"Compound sentence",
"Complex sentence",
"Clauses usage",
"Sentence formation",
"Word arrangement",
"Correct grammar",
"Sentence patterns",
"Examples",
"Types"
],
exercises:[
"Define sentence",
"List types",
"Form sentences",
"Identify types",
"Correct structure",
"Combine sentences",
"Rewrite sentences",
"Use clauses",
"Give examples",
"Solve questions"
]
},

{
title:"Punctuation",
content:`Punctuation marks are symbols used to clarify meaning in writing.

They include comma, full stop, colon, semicolon, apostrophe, etc.`,
examples:[
"Use of comma",
"Full stop usage",
"Question mark",
"Exclamation mark",
"Apostrophe usage",
"Quotation marks",
"Colon and semicolon",
"Sentence clarity",
"Writing rules",
"Examples"
],
exercises:[
"Define punctuation",
"Use marks correctly",
"Correct sentences",
"Identify errors",
"Rewrite sentences",
"Give examples",
"Explain usage",
"Apply rules",
"Practice writing",
"Solve questions"
]
},
,
{
title:"Oral English",
content:`Oral English focuses on correct pronunciation, stress, intonation, and speech sounds.

It includes vowels, consonants, diphthongs, stress patterns, and syllables. Mispronunciation can change meaning completely.

Students must learn phonetic symbols and practice correct articulation of sounds.

Stress refers to emphasis on syllables, while intonation refers to the rise and fall of voice.`,
examples:[
"Ship vs Sheep (ɪ vs i:)",
"Bat vs Bart (æ vs a:)",
"Stress: PREsent (noun) vs preSENT (verb)",
"Record vs reCORD",
"Consonant sounds practice",
"Vowel sounds practice",
"Diphthongs like /ai/ in 'time'",
"Correct pronunciation of words",
"Silent letters examples",
"Word stress patterns"
],
exercises:[
"Define Oral English",
"Differentiate vowels and consonants",
"Identify stressed syllables",
"Pronounce given words",
"Write phonetic symbols",
"Distinguish similar sounds",
"Practice intonation",
"Give examples of diphthongs",
"Correct pronunciation errors",
"Solve past questions"
]
},

{
title:"Synonyms",
content:`Synonyms are words that have similar meanings. They are commonly tested in JAMB to assess vocabulary strength.

Understanding synonyms helps improve comprehension and expression.

Words may not be exactly identical but must be close in meaning depending on context.`,
examples:[
"Happy → Joyful",
"Big → Large",
"Fast → Quick",
"Smart → Intelligent",
"Angry → Furious",
"Begin → Start",
"End → Finish",
"Rich → Wealthy",
"Poor → Needy",
"Easy → Simple"
],
exercises:[
"Define synonyms",
"Give examples",
"Choose correct synonym",
"Replace words",
"Match similar meanings",
"Use in sentences",
"Identify best option",
"Practice vocabulary",
"Correct wrong matches",
"Solve exam questions"
]
},

{
title:"Antonyms",
content:`Antonyms are words that have opposite meanings. They test understanding of vocabulary and context.

Correct antonyms depend on how the word is used in a sentence.`,
examples:[
"Hot → Cold",
"Big → Small",
"Fast → Slow",
"Happy → Sad",
"Rich → Poor",
"Early → Late",
"Strong → Weak",
"Easy → Difficult",
"Bright → Dark",
"Open → Close"
],
exercises:[
"Define antonyms",
"Give examples",
"Choose correct opposite",
"Match opposites",
"Use in sentences",
"Replace words",
"Identify correct answer",
"Practice vocabulary",
"Correct errors",
"Solve exam questions"
]
},

{
title:"Sentence Completion",
content:`Sentence completion tests the ability to choose the correct word or phrase that best completes a sentence.

It requires knowledge of grammar, vocabulary, and context.`,
examples:[
"He ____ to school yesterday (went)",
"She is ____ than her sister (taller)",
"The boy ____ playing (is)",
"We ____ finished (have)",
"They ____ coming (are)",
"Correct tense usage",
"Context understanding",
"Grammar application",
"Word choice",
"Sentence meaning"
],
exercises:[
"Complete sentences",
"Choose correct option",
"Apply grammar rules",
"Use context clues",
"Identify correct tense",
"Fill blanks",
"Practice questions",
"Correct errors",
"Rewrite sentences",
"Solve exam questions"
]
},

{
title:"Sentence Interpretation",
content:`Sentence interpretation involves understanding the meaning of a sentence, including idioms, expressions, and figurative language.

Students must select the option closest in meaning.`,
examples:[
"He kicked the bucket → He died",
"Break the ice → Start conversation",
"Hit the nail on the head → Correct exactly",
"Piece of cake → Very easy",
"Spill the beans → Reveal secret",
"Interpret idioms",
"Understand expressions",
"Context meaning",
"Figurative language",
"Real meaning"
],
exercises:[
"Interpret sentences",
"Explain idioms",
"Choose correct meaning",
"Rewrite sentences",
"Identify expressions",
"Use context",
"Practice questions",
"Match meanings",
"Explain phrases",
"Solve exam questions"
]
},

{
title:"Lexis and Structure",
content:`Lexis and structure focus on correct usage of words and grammar in sentences.

It tests vocabulary, sentence formation, and grammatical accuracy.`,
examples:[
"Correct word usage",
"Proper sentence structure",
"Grammar rules",
"Word formation",
"Sentence correction",
"Parts of speech usage",
"Error identification",
"Sentence patterns",
"Language accuracy",
"Expression clarity"
],
exercises:[
"Define lexis",
"Define structure",
"Correct sentences",
"Identify errors",
"Use correct words",
"Rewrite sentences",
"Practice grammar",
"Choose correct option",
"Explain usage",
"Solve exam questions"
]
},

{
title:"Idioms and Expressions",
content:`Idioms are expressions whose meanings are not literal. They are widely tested in English exams.

Understanding idioms improves comprehension and communication.`,
examples:[
"Kick the bucket → Die",
"Under the weather → Sick",
"Once in a blue moon → Rarely",
"Break a leg → Good luck",
"Hit the sack → Sleep",
"Spill the beans → Reveal secret",
"Cost an arm and a leg → Very expensive",
"Piece of cake → Easy",
"Bite the bullet → Endure pain",
"Burn the midnight oil → Study late"
],
exercises:[
"Define idioms",
"Give examples",
"Interpret meanings",
"Use in sentences",
"Match meanings",
"Practice expressions",
"Explain phrases",
"Identify correct option",
"Rewrite sentences",
"Solve exam questions"
]
}

]
};




// ================= REAL CBT =================

function generateCBT(subject){

if(subject==="Math"){
return [

{q:"Solve 3x + 7 = 22",o:["3","4","5","6"],a:"5",exp:"3x = 15 → x = 5"},
{q:"If x² - 9 = 0, find x",o:["±3","3","-3","0"],a:"±3",exp:"Difference of squares: (x-3)(x+3)=0"},
{q:"Evaluate sin 30°",o:["1","0.5","0","√3"],a:"0.5",exp:"Standard trig value"},
{q:"tan 45° =",o:["1","0","-1","2"],a:"1",exp:"tan 45° = 1"},
{q:"Find derivative of x²",o:["2x","x","1","x²"],a:"2x",exp:"Power rule"},
{q:"∫ 2x dx =",o:["x²","2x","x²+1","x"],a:"x²",exp:"Integration of 2x = x²"},
{q:"Mean of 2,4,6,8",o:["4","5","6","3"],a:"5",exp:"(2+4+6+8)/4=5"},
{q:"Probability of head in coin toss",o:["1/2","1","0","2"],a:"1/2",exp:"Fair coin"},
{q:"Solve 5x = 45",o:["9","8","7","6"],a:"9",exp:"x=9"},
{q:"Area of circle?",o:["πr²","2πr","r²","πd"],a:"πr²",exp:"Standard formula"},

{q:"Find median of 1,3,5,7,9",o:["5","6","7","4"],a:"5",exp:"Middle value"},
{q:"log₁₀ 100 =",o:["2","1","10","0"],a:"2",exp:"10²=100"},
{q:"Simplify 2³ × 2²",o:["2⁵","2⁶","4⁵","8"],a:"2⁵",exp:"Add indices"},
{q:"Find slope of line y=2x+3",o:["2","3","1","0"],a:"2",exp:"Slope = coefficient of x"},
{q:"Solve x² - 4x + 4 = 0",o:["2","-2","±2","4"],a:"2",exp:"(x-2)²=0"},
{q:"Find cos 60°",o:["0.5","1","0","√3"],a:"0.5",exp:"Standard value"},
{q:"Volume of cube side 3",o:["27","9","18","6"],a:"27",exp:"3³=27"},
{q:"Solve 2x - 5 = 9",o:["7","6","5","4"],a:"7",exp:"2x=14"},
{q:"Find range of 2,4,6,8",o:["6","8","4","2"],a:"6",exp:"8-2"},
{q:"sin²θ + cos²θ =",o:["1","0","2","θ"],a:"1",exp:"Identity"},

{q:"Find next term: 2,4,8,16",o:["32","24","18","20"],a:"32",exp:"×2 sequence"},
{q:"Find nth term of 2,4,6,...",o:["2n","n²","n+2","n"],a:"2n",exp:"Arithmetic sequence"},
{q:"Solve 7x = 21",o:["3","2","4","5"],a:"3",exp:"x=3"},
{q:"Evaluate tan 0°",o:["0","1","-1","2"],a:"0",exp:"tan0=0"},
{q:"Find area of rectangle 5×3",o:["15","8","10","20"],a:"15",exp:"l×b"},
{q:"Find 10% of 200",o:["20","10","30","25"],a:"20",exp:"0.1×200"},
{q:"Solve x/4 = 5",o:["20","10","15","5"],a:"20",exp:"Multiply both sides"},
{q:"Find perimeter of square side 4",o:["16","8","12","20"],a:"16",exp:"4×4"},
{q:"Find gradient between (0,0) and (2,4)",o:["2","4","1","3"],a:"2",exp:"(4-0)/(2-0)"},
{q:"Find inverse of f(x)=x+2",o:["x-2","x+2","2-x","1/x"],a:"x-2",exp:"Swap and solve"},

{q:"Evaluate 3² + 4²",o:["25","12","7","16"],a:"25",exp:"9+16"},
{q:"Find cube root of 27",o:["3","9","6","2"],a:"3",exp:"3³=27"},
{q:"Solve x² = 25",o:["±5","5","-5","0"],a:"±5",exp:"Square root"},
{q:"Find circumference of circle radius 7",o:["14π","49π","7π","21π"],a:"14π",exp:"2πr"},
{q:"Find LCM of 4 and 6",o:["12","24","6","18"],a:"12",exp:"Smallest multiple"},
{q:"Find HCF of 12 and 18",o:["6","12","3","9"],a:"6",exp:"Greatest factor"},
{q:"Evaluate 5!",o:["120","60","20","25"],a:"120",exp:"5×4×3×2×1"},
{q:"Find probability of getting 6 on dice",o:["1/6","1/2","1","0"],a:"1/6",exp:"One outcome"},
{q:"Solve 9x=81",o:["9","8","7","6"],a:"9",exp:"x=9"},
{q:"Find sum of first 5 natural numbers",o:["15","10","20","5"],a:"15",exp:"1+2+3+4+5"}
];
}

// ===== PHYSICS =====
if(subject==="Physics"){
return [

{q:"A body moves with constant acceleration. If its velocity changes from 5 m/s to 25 m/s in 10 s, find the acceleration.",
o:["2 m/s²","1 m/s²","3 m/s²","4 m/s²"],
a:"2 m/s²",
exp:"a = (v-u)/t = (25-5)/10 = 2 m/s²"},

{q:"A force of 10 N acts on a mass of 2 kg. Find acceleration.",
o:["5 m/s²","10 m/s²","2 m/s²","20 m/s²"],
a:"5 m/s²",
exp:"F = ma → a = F/m = 10/2 = 5 m/s²"},

{q:"The unit of momentum is:",
o:["kg m/s","N/m","J","W"],
a:"kg m/s",
exp:"Momentum = mass × velocity → unit = kg m/s"},

{q:"A body of mass 2 kg moves at 3 m/s. Find its kinetic energy.",
o:["9 J","6 J","12 J","18 J"],
a:"9 J",
exp:"KE = ½mv² = ½×2×9 = 9 J"},

{q:"The acceleration due to gravity is approximately:",
o:["9.8 m/s²","10 m/s","8 m/s²","9 m/s"],
a:"9.8 m/s²",
exp:"Standard value of g is 9.8 m/s²"},

{q:"Which wave is longitudinal?",
o:["Sound","Light","Water","X-ray"],
a:"Sound",
exp:"Sound waves are longitudinal"},

{q:"Ohm’s law states:",
o:["V = IR","P = IV","F = ma","E = mc²"],
a:"V = IR",
exp:"Ohm’s law relates voltage, current, and resistance"},

{q:"Pressure is defined as:",
o:["Force/Area","Area/Force","Mass/Volume","Force×Area"],
a:"Force/Area",
exp:"P = F/A"},

{q:"The SI unit of force is:",
o:["Newton","Joule","Watt","Pascal"],
a:"Newton",
exp:"Force is measured in Newtons"},

{q:"A current of 2A flows through a resistor of 5Ω. Find voltage.",
o:["10V","5V","2.5V","20V"],
a:"10V",
exp:"V = IR = 2×5 = 10V"},

{q:"A body of mass 5kg is lifted to a height of 10m. Find potential energy (g=10m/s²).",
o:["500J","250J","100J","50J"],
a:"500J",
exp:"PE = mgh = 5×10×10 = 500J"},

{q:"Which quantity is scalar?",
o:["Velocity","Acceleration","Speed","Force"],
a:"Speed",
exp:"Speed has magnitude only, no direction"},

{q:"The unit of power is:",
o:["Watt","Joule","Newton","Pascal"],
a:"Watt",
exp:"Power is measured in Watts"},

{q:"Which instrument measures electric current?",
o:["Ammeter","Voltmeter","Thermometer","Barometer"],
a:"Ammeter",
exp:"Ammeter measures current"},

{q:"A wave transfers:",
o:["Energy","Mass","Matter","Particles"],
a:"Energy",
exp:"Waves transfer energy, not matter"},

{q:"Density is defined as:",
o:["Mass/Volume","Volume/Mass","Force/Area","Mass×Volume"],
a:"Mass/Volume",
exp:"Density = mass ÷ volume"},

{q:"The SI unit of pressure is:",
o:["Pascal","Newton","Joule","Watt"],
a:"Pascal",
exp:"Pressure unit is Pascal (Pa)"},

{q:"A car travels 100m in 5s. Find speed.",
o:["20 m/s","25 m/s","10 m/s","15 m/s"],
a:"20 m/s",
exp:"Speed = distance/time = 100/5 = 20 m/s"},

{q:"Which is a renewable energy source?",
o:["Solar","Coal","Petrol","Diesel"],
a:"Solar",
exp:"Solar energy is renewable"},

{q:"The frequency of a wave is 50Hz. What does this mean?",
o:["50 cycles/sec","50 m/s","50 waves","50 energy"],
a:"50 cycles/sec",
exp:"Hz = cycles per second"},
,
{
q:"What is the unit of force?",
o:["Joule","Newton","Watt","Pascal"],
a:"Newton",
exp:"Force is measured in Newtons (N)."
},

{
q:"Which law states that for every action there is an equal and opposite reaction?",
o:["Newton’s First Law","Newton’s Second Law","Newton’s Third Law","Law of Gravitation"],
a:"Newton’s Third Law",
exp:"It explains action-reaction force pairs."
},

{
q:"What is the acceleration due to gravity on Earth?",
o:["9.8 m/s²","10 m/s","8.9 m/s²","9.8 km/s²"],
a:"9.8 m/s²",
exp:"Standard gravity is approximately 9.8 m/s²."
},

{
q:"Which quantity is a vector?",
o:["Speed","Distance","Velocity","Mass"],
a:"Velocity",
exp:"Velocity has both magnitude and direction."
},

{
q:"What is work done when force is applied but no displacement occurs?",
o:["Zero","Maximum","Infinite","Negative"],
a:"Zero",
exp:"Work = Force × Distance; no distance means zero work."
},

{
q:"Which device measures electric current?",
o:["Voltmeter","Ammeter","Galvanometer","Barometer"],
a:"Ammeter",
exp:"Ammeter measures current in amperes."
},

{
q:"Which form of energy is stored in a stretched spring?",
o:["Kinetic energy","Chemical energy","Elastic potential energy","Thermal energy"],
a:"Elastic potential energy",
exp:"Energy stored due to deformation."
},

{
q:"What type of wave is light?",
o:["Longitudinal","Transverse","Mechanical","Sound"],
a:"Transverse",
exp:"Light waves oscillate perpendicular to direction of motion."
},

{
q:"Which property of a wave determines its pitch?",
o:["Amplitude","Frequency","Speed","Wavelength"],
a:"Frequency",
exp:"Higher frequency means higher pitch."
},

{
q:"What happens to pressure when area increases (force constant)?",
o:["Increases","Decreases","Remains constant","Becomes zero"],
a:"Decreases",
exp:"Pressure = Force / Area, so larger area reduces pressure."
},

{
q:"Which mirror produces real and inverted images?",
o:["Plane mirror","Convex mirror","Concave mirror","None"],
a:"Concave mirror",
exp:"Concave mirrors can form real inverted images."
},

{
q:"What is the unit of power?",
o:["Joule","Newton","Watt","Volt"],
a:"Watt",
exp:"Power is measured in watts (W)."
},

{
q:"Which gas law relates pressure and temperature?",
o:["Boyle’s law","Charles law","Gay-Lussac’s law","Avogadro law"],
a:"Gay-Lussac’s law",
exp:"Pressure is directly proportional to temperature at constant volume."
},

{
q:"Which force keeps planets in orbit?",
o:["Magnetic force","Electrostatic force","Gravitational force","Friction"],
a:"Gravitational force",
exp:"Gravity keeps celestial bodies in orbit."
},

{
q:"What is the unit of frequency?",
o:["Hertz","Newton","Joule","Meter"],
a:"Hertz",
exp:"Frequency is measured in Hertz (Hz)."
},

{
q:"Which medium does sound travel fastest?",
o:["Gas","Liquid","Solid","Vacuum"],
a:"Solid",
exp:"Sound travels fastest in solids due to close particle arrangement."
},

{
q:"What is momentum?",
o:["Mass × velocity","Force × distance","Energy × time","Mass × acceleration"],
a:"Mass × velocity",
exp:"Momentum = mv."
},

{
q:"Which instrument measures atmospheric pressure?",
o:["Thermometer","Barometer","Ammeter","Hygrometer"],
a:"Barometer",
exp:"Barometer measures air pressure."
},

{
q:"Which color has the highest frequency?",
o:["Red","Green","Blue","Violet"],
a:"Violet",
exp:"Violet has the highest frequency in visible spectrum."
},

{
q:"What type of lens is used to correct short-sightedness?",
o:["Convex","Concave","Plane","Cylindrical"],
a:"Concave",
exp:"Concave lenses diverge light to correct myopia."
}
];
}
// ===== CHEMISTRY =====
if(subject==="Chemistry"){
return [
  {
    q:"Which element has atomic number 1?",
    o:["Hydrogen","Oxygen","Nitrogen","Carbon"],
    a:"Hydrogen",
    exp:"Hydrogen is the first element in the periodic table."
  },
  {
    q:"What is the pH of a neutral solution?",
    o:["0","7","14","1"],
    a:"7",
    exp:"Neutral solutions have pH = 7."
  },
  ,
{
q:"Which of the following is a strong acid?",
o:["CH3COOH","HCl","NH3","NaOH"],
a:"HCl",
exp:"HCl is a strong acid that completely ionizes in water."
},

{
q:"Which metal reacts vigorously with water?",
o:["Copper","Sodium","Iron","Silver"],
a:"Sodium",
exp:"Sodium reacts violently with water producing hydrogen gas and heat."
},

{
q:"What is the empirical formula of glucose (C6H12O6)?",
o:["CH2O","C3H6O3","C2H4O2","CHO"],
a:"CH2O",
exp:"Divide all subscripts by 6 to get the simplest ratio CH2O."
},

{
q:"Which gas turns limewater milky?",
o:["CO2","O2","H2","N2"],
a:"CO2",
exp:"Carbon dioxide reacts with limewater to form calcium carbonate."
},

{
q:"What is the main constituent of natural gas?",
o:["Ethane","Methane","Propane","Butane"],
a:"Methane",
exp:"Methane is the primary component of natural gas."
},

{
q:"Which process involves loss of electrons?",
o:["Reduction","Oxidation","Neutralization","Hydrolysis"],
a:"Oxidation",
exp:"Oxidation is defined as loss of electrons."
},

{
q:"Which salt is formed from HCl and NaOH?",
o:["NaCl","KCl","Na2SO4","NH4Cl"],
a:"NaCl",
exp:"Neutralization of HCl and NaOH produces NaCl and water."
},

{
q:"Which element has atomic number 11?",
o:["Magnesium","Sodium","Aluminium","Potassium"],
a:"Sodium",
exp:"Atomic number 11 corresponds to sodium."
},

{
q:"Which compound is basic?",
o:["HCl","NaOH","CO2","H2SO4"],
a:"NaOH",
exp:"NaOH is a strong base."
},

{
q:"Which gas is used in welding?",
o:["Oxygen","Hydrogen","Acetylene","Nitrogen"],
a:"Acetylene",
exp:"Acetylene is used in oxy-acetylene welding."
},

{
q:"Which of the following is an oxidizing agent?",
o:["H2","CO","O2","CH4"],
a:"O2",
exp:"Oxygen accepts electrons and acts as an oxidizing agent."
},

{
q:"Which process converts solid directly to gas?",
o:["Melting","Condensation","Sublimation","Evaporation"],
a:"Sublimation",
exp:"Sublimation is direct change from solid to gas."
},

{
q:"What is the valency of oxygen?",
o:["1","2","3","4"],
a:"2",
exp:"Oxygen typically forms two bonds."
},

{
q:"Which of these is a noble gas?",
o:["Oxygen","Nitrogen","Neon","Hydrogen"],
a:"Neon",
exp:"Neon is a noble gas and chemically inert."
},

{
q:"Which type of reaction is combustion?",
o:["Endothermic","Exothermic","Neutral","Reversible"],
a:"Exothermic",
exp:"Combustion releases heat energy."
},

{
q:"Which substance is used as drying agent?",
o:["NaCl","CaCl2","KOH","NH3"],
a:"CaCl2",
exp:"Calcium chloride absorbs moisture."
},

{
q:"Which gas is evolved when acid reacts with metal?",
o:["Oxygen","Hydrogen","Carbon dioxide","Nitrogen"],
a:"Hydrogen",
exp:"Acid + metal produces hydrogen gas."
},

{
q:"Which law relates pressure and volume of gas?",
o:["Charles law","Boyle’s law","Avogadro law","Dalton law"],
a:"Boyle’s law",
exp:"Boyle’s law states pressure is inversely proportional to volume."
},

{
q:"Which compound is an alcohol?",
o:["CH4","C2H5OH","C2H4","C2H2"],
a:"C2H5OH",
exp:"Ethanol contains OH group, making it an alcohol."
},

{
q:"Which element is in Group 1?",
o:["Calcium","Sodium","Aluminium","Iron"],
a:"Sodium",
exp:"Group 1 elements are alkali metals like sodium."
},

{
q:"Which of the following is a base?",
o:["HCl","NaOH","CO2","SO2"],
a:"NaOH",
exp:"NaOH produces OH- ions in solution."
},

{
q:"Which gas supports combustion?",
o:["Nitrogen","Oxygen","Hydrogen","Carbon dioxide"],
a:"Oxygen",
exp:"Oxygen supports burning."
},

{
q:"Which is an example of a catalyst?",
o:["Enzyme","Water","Salt","Acid"],
a:"Enzyme",
exp:"Enzymes speed up reactions without being consumed."
},

{
q:"What is the boiling point of water?",
o:["90°C","100°C","80°C","120°C"],
a:"100°C",
exp:"Water boils at 100°C at standard pressure."
},

{
q:"Which compound contains ionic bond?",
o:["H2O","NaCl","CO2","CH4"],
a:"NaCl",
exp:"NaCl is formed by transfer of electrons."
},

{
q:"Which process is reduction?",
o:["Loss of electrons","Gain of electrons","Gain of oxygen","Loss of hydrogen"],
a:"Gain of electrons",
exp:"Reduction is gain of electrons."
},

{
q:"Which element is a halogen?",
o:["Oxygen","Chlorine","Nitrogen","Carbon"],
a:"Chlorine",
exp:"Halogens are Group 17 elements like chlorine."
},

{
q:"Which compound is acidic?",
o:["NaOH","HCl","NH3","CaO"],
a:"HCl",
exp:"HCl releases H+ ions in solution."
},

{
q:"Which gas is used in photosynthesis?",
o:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],
a:"Carbon dioxide",
exp:"CO2 is used by plants to make food."
},

{
q:"Which particle has no charge?",
o:["Proton","Electron","Neutron","Ion"],
a:"Neutron",
exp:"Neutrons are neutral particles."
},
,
{
q:"Which of the following is an example of a physical change?",
o:["Burning of paper","Rusting of iron","Melting of ice","Digestion of food"],
a:"Melting of ice",
exp:"Melting is a physical change because no new substance is formed."
},

{
q:"Which gas is responsible for acid rain?",
o:["Oxygen","Nitrogen","Sulphur dioxide","Hydrogen"],
a:"Sulphur dioxide",
exp:"SO₂ reacts with water to form acids leading to acid rain."
},

{
q:"Which of the following is an electrolyte?",
o:["Sugar solution","Salt solution","Alcohol","Distilled water"],
a:"Salt solution",
exp:"Salt solution conducts electricity due to free ions."
},

{
q:"What is the atomic number of carbon?",
o:["6","12","8","4"],
a:"6",
exp:"Carbon has 6 protons, hence atomic number 6."
},

{
q:"Which process is used to separate crude oil?",
o:["Filtration","Distillation","Fractional distillation","Chromatography"],
a:"Fractional distillation",
exp:"Crude oil is separated into fractions using fractional distillation."
},

{
q:"Which of the following is a non-metal?",
o:["Iron","Copper","Sulphur","Zinc"],
a:"Sulphur",
exp:"Sulphur is a non-metal while the others are metals."
},

{
q:"Which compound is used as bleaching agent?",
o:["NaCl","Ca(OH)2","Cl2","NaOH"],
a:"Cl2",
exp:"Chlorine is commonly used for bleaching and disinfection."
},

{
q:"Which factor increases rate of reaction?",
o:["Lower temperature","Smaller surface area","Higher concentration","Removing catalyst"],
a:"Higher concentration",
exp:"Higher concentration increases collision frequency, speeding up reactions."
},

{
q:"Which element is needed for rusting?",
o:["Nitrogen","Oxygen","Carbon","Helium"],
a:"Oxygen",
exp:"Rusting requires oxygen and moisture."
},

{
q:"Which of the following is an example of an acid?",
o:["NaOH","KOH","H2SO4","CaO"],
a:"H2SO4",
exp:"Sulphuric acid (H₂SO₄) is a strong acid."
}
];

}
// ===== BIOLOGY =====
if(subject === "Biology"){
return [

{
q:"Which organelle is responsible for energy production?",
o:["Nucleus","Mitochondrion","Ribosome","Golgi body"],
a:"Mitochondrion",
exp:"Mitochondria generate ATP during respiration."
},

{
q:"The basic unit of life is:",
o:["Tissue","Organ","Cell","System"],
a:"Cell",
exp:"Cells are the smallest units capable of life."
},

{
q:"Osmosis involves movement of:",
o:["Solutes","Water","Gases","Proteins"],
a:"Water",
exp:"Osmosis is movement of water across a semi-permeable membrane."
},

{
q:"Photosynthesis occurs in the:",
o:["Root","Stem","Leaf","Flower"],
a:"Leaf",
exp:"Leaves contain chlorophyll for photosynthesis."
},

{
q:"Chlorophyll is responsible for:",
o:["Respiration","Green color","Absorbing sunlight","Water transport"],
a:"Absorbing sunlight",
exp:"Chlorophyll captures light energy."
},

{
q:"Which blood cell transports oxygen?",
o:["White","Platelets","Red","Plasma"],
a:"Red",
exp:"Red blood cells carry oxygen via hemoglobin."
},

{
q:"Which blood cell fights infection?",
o:["Red","White","Platelets","Plasma"],
a:"White",
exp:"White blood cells defend against pathogens."
},

{
q:"Which organ pumps blood?",
o:["Lungs","Brain","Heart","Kidney"],
a:"Heart",
exp:"The heart circulates blood."
},

{
q:"The human skeleton provides:",
o:["Digestion","Support","Respiration","Circulation"],
a:"Support",
exp:"Skeleton gives structure and protection."
},

{
q:"Which system controls the body?",
o:["Digestive","Respiratory","Nervous","Circulatory"],
a:"Nervous",
exp:"Nervous system coordinates body actions."
},

{
q:"Which process produces food in plants?",
o:["Respiration","Photosynthesis","Transpiration","Digestion"],
a:"Photosynthesis",
exp:"Plants use sunlight to produce food."
},

{
q:"Transpiration occurs through:",
o:["Roots","Stem","Stomata","Flowers"],
a:"Stomata",
exp:"Stomata allow water vapor loss."
},

{
q:"Which part absorbs water in plants?",
o:["Leaf","Stem","Root","Flower"],
a:"Root",
exp:"Roots absorb water and minerals."
},

{
q:"Which nutrient builds body tissues?",
o:["Carbohydrates","Proteins","Fats","Vitamins"],
a:"Proteins",
exp:"Proteins are used for growth and repair."
},

{
q:"Which vitamin prevents scurvy?",
o:["A","B","C","D"],
a:"C",
exp:"Vitamin C deficiency causes scurvy."
},

{
q:"Respiration releases:",
o:["Energy","Water","Oxygen","Nitrogen"],
a:"Energy",
exp:"Energy is released from food."
},

{
q:"Which organ filters blood?",
o:["Heart","Lungs","Kidney","Liver"],
a:"Kidney",
exp:"Kidneys remove waste from blood."
},

{
q:"The brain is part of:",
o:["Digestive","Nervous","Circulatory","Respiratory"],
a:"Nervous",
exp:"Brain controls body activities."
},

{
q:"Which gas is used in respiration?",
o:["CO2","O2","N2","H2"],
a:"O2",
exp:"Oxygen is needed for respiration."
},

{
q:"Which gas is released during photosynthesis?",
o:["CO2","O2","N2","H2"],
a:"O2",
exp:"Oxygen is released as a by-product."
},

{
q:"Enzymes are:",
o:["Carbohydrates","Proteins","Fats","Vitamins"],
a:"Proteins",
exp:"Enzymes are protein catalysts."
},

{
q:"Which organ stores bile?",
o:["Liver","Gall bladder","Pancreas","Kidney"],
a:"Gall bladder",
exp:"Bile is stored in the gall bladder."
},

{
q:"Which system transports nutrients?",
o:["Digestive","Circulatory","Respiratory","Nervous"],
a:"Circulatory",
exp:"Blood carries nutrients."
},

{
q:"Which organ exchanges gases?",
o:["Heart","Lungs","Kidney","Brain"],
a:"Lungs",
exp:"Gas exchange occurs in lungs."
},

{
q:"Which structure protects the brain?",
o:["Ribs","Skull","Spine","Pelvis"],
a:"Skull",
exp:"Skull protects the brain."
},

{
q:"Which part of the eye controls light entry?",
o:["Lens","Cornea","Iris","Retina"],
a:"Iris",
exp:"Iris regulates pupil size."
},

{
q:"Which sense organ detects sound?",
o:["Eye","Ear","Nose","Skin"],
a:"Ear",
exp:"Ear is responsible for hearing."
},

{
q:"Which organ produces insulin?",
o:["Liver","Pancreas","Kidney","Heart"],
a:"Pancreas",
exp:"Insulin regulates blood sugar."
},

{
q:"Which process removes waste from body?",
o:["Respiration","Excretion","Digestion","Circulation"],
a:"Excretion",
exp:"Excretion removes metabolic waste."
},

{
q:"Which part of plant transports water?",
o:["Phloem","Xylem","Leaf","Root"],
a:"Xylem",
exp:"Xylem carries water."
},

{
q:"Which carries food in plants?",
o:["Xylem","Phloem","Root","Stem"],
a:"Phloem",
exp:"Phloem transports food."
},

{
q:"Which is NOT a vertebrate?",
o:["Fish","Frog","Snake","Earthworm"],
a:"Earthworm",
exp:"Earthworms lack backbone."
},

{
q:"Which habitat is aquatic?",
o:["Desert","Forest","Ocean","Grassland"],
a:"Ocean",
exp:"Aquatic means water habitat."
},

{
q:"Which organism makes its own food?",
o:["Herbivore","Carnivore","Autotroph","Parasite"],
a:"Autotroph",
exp:"Autotrophs produce food."
},

{
q:"Which relationship benefits both organisms?",
o:["Parasitism","Mutualism","Competition","Predation"],
a:"Mutualism",
exp:"Both organisms benefit."
},

{
q:"Which is a carnivore?",
o:["Cow","Goat","Lion","Sheep"],
a:"Lion",
exp:"Carnivores eat meat."
},

{
q:"Which is herbivore?",
o:["Lion","Tiger","Goat","Dog"],
a:"Goat",
exp:"Herbivores eat plants."
},

{
q:"Which is omnivore?",
o:["Lion","Goat","Human","Snake"],
a:"Human",
exp:"Omnivores eat both plants and animals."
},

{
q:"Which process forms new cells?",
o:["Respiration","Mitosis","Photosynthesis","Digestion"],
a:"Mitosis",
exp:"Mitosis produces identical cells."
},

{
q:"Which carries genetic information?",
o:["Protein","DNA","Water","Fat"],
a:"DNA",
exp:"DNA stores genetic information."
}

];
}
// ===== ENGLISH =====
if(subject === "English"){
return [

{
q:"Choose the correct option: She ___ going to school.",
o:["is","are","was","be"],
a:"is",
exp:"Singular subject 'She' takes 'is'."
},

{
q:"Choose the correct antonym of 'Happy':",
o:["Joyful","Sad","Excited","Glad"],
a:"Sad",
exp:"'Sad' is the opposite of 'Happy'."
},

{
q:"Choose the correct synonym of 'Quick':",
o:["Slow","Fast","Lazy","Weak"],
a:"Fast",
exp:"'Quick' means fast."
},

{
q:"Fill in the blank: He ___ the book yesterday.",
o:["reads","read","reading","has read"],
a:"read",
exp:"Past tense of 'read' is 'read' (pronounced red)."
},

{
q:"Choose the correct spelling:",
o:["Definately","Definitely","Definitly","Defenitely"],
a:"Definitely",
exp:"Correct spelling is 'Definitely'."
},

{
q:"Identify the noun:",
o:["Run","Beautiful","Lagos","Quickly"],
a:"Lagos",
exp:"Lagos is a name (noun)."
},

{
q:"Choose correct: They ___ playing football.",
o:["is","are","was","be"],
a:"are",
exp:"Plural subject takes 'are'."
},

{
q:"Which is a verb?",
o:["Chair","Run","Blue","Soft"],
a:"Run",
exp:"Verb shows action."
},

{
q:"Choose correct plural of 'Child':",
o:["Childs","Children","Childes","Child"],
a:"Children",
exp:"Irregular plural form."
},

{
q:"Fill in: I have ___ my assignment.",
o:["do","did","done","doing"],
a:"done",
exp:"Present perfect uses 'done'."
},

{
q:"Choose correct: Neither the boy nor the girls ___ present.",
o:["is","are","was","be"],
a:"are",
exp:"Verb agrees with nearest subject (girls)."
},

{
q:"Which is an adjective?",
o:["Quickly","Run","Beautiful","Eat"],
a:"Beautiful",
exp:"Adjective describes noun."
},

{
q:"Choose correct tense: She ___ to school every day.",
o:["go","goes","went","going"],
a:"goes",
exp:"Present simple with 'she' uses 'goes'."
},

{
q:"Fill in: He is afraid ___ dogs.",
o:["of","for","with","on"],
a:"of",
exp:"Correct preposition is 'afraid of'."
},

{
q:"Choose the correct punctuation:",
o:[
"Lets eat",
"Let's eat",
"Lets' eat",
"Let is eat"
],
a:"Let's eat",
exp:"Apostrophe shows contraction."
},

{
q:"Choose correct: I ___ a letter now.",
o:["write","am writing","wrote","written"],
a:"am writing",
exp:"Present continuous tense."
},

{
q:"Which is an adverb?",
o:["Quickly","Run","Book","Blue"],
a:"Quickly",
exp:"Adverb describes verb."
},

{
q:"Choose correct: She ___ already eaten.",
o:["have","has","had","having"],
a:"has",
exp:"'She' takes 'has'."
},

{
q:"Choose opposite of 'Strong':",
o:["Powerful","Weak","Big","Heavy"],
a:"Weak",
exp:"Weak is opposite."
},

{
q:"Choose correct article: ___ apple",
o:["a","an","the","no article"],
a:"an",
exp:"'An' is used before vowel sounds."
},

{
q:"Fill in: He is fond ___ music.",
o:["of","for","with","on"],
a:"of",
exp:"Correct expression is 'fond of'."
},

{
q:"Choose correct: She ___ finished her work.",
o:["have","has","had","having"],
a:"has",
exp:"Singular subject uses 'has'."
},

{
q:"Which is a pronoun?",
o:["John","He","Run","Blue"],
a:"He",
exp:"Pronoun replaces noun."
},

{
q:"Choose correct: I ___ him yesterday.",
o:["see","saw","seen","seeing"],
a:"saw",
exp:"Past tense of 'see' is 'saw'."
},

{
q:"Choose synonym of 'Big':",
o:["Large","Small","Tiny","Short"],
a:"Large",
exp:"Big means large."
},

{
q:"Choose correct: They ___ gone home.",
o:["has","have","had","having"],
a:"have",
exp:"Plural subject uses 'have'."
},

{
q:"Fill in: She is married ___ a doctor.",
o:["with","to","for","on"],
a:"to",
exp:"Correct is 'married to'."
},

{
q:"Choose correct spelling:",
o:["Occured","Occurred","Ocurred","Occurrd"],
a:"Occurred",
exp:"Correct spelling has double 'c' and 'r'."
},

{
q:"Which is a conjunction?",
o:["And","Run","Blue","Quickly"],
a:"And",
exp:"Conjunction joins words."
},

{
q:"Choose correct: I prefer tea ___ coffee.",
o:["than","to","over","with"],
a:"to",
exp:"Correct phrase is 'prefer to'."
},

{
q:"Choose correct: He ___ been here before.",
o:["have","has","had","having"],
a:"has",
exp:"Singular subject uses 'has'."
},

{
q:"Fill in: She arrived ___ time.",
o:["on","in","at","by"],
a:"on",
exp:"Correct phrase: 'on time'."
},

{
q:"Choose antonym of 'Early':",
o:["Late","Fast","Soon","Quick"],
a:"Late",
exp:"Late is opposite."
},

{
q:"Which is an interjection?",
o:["Wow!","Run","Blue","Book"],
a:"Wow!",
exp:"Interjection expresses emotion."
},

{
q:"Choose correct: He ___ playing when I came.",
o:["is","was","are","be"],
a:"was",
exp:"Past continuous tense."
},

{
q:"Fill in: They are good ___ football.",
o:["in","at","on","with"],
a:"at",
exp:"Correct phrase: 'good at'."
},

{
q:"Choose correct: I ___ my homework.",
o:["have done","has done","had done","doing"],
a:"have done",
exp:"Correct present perfect."
},

{
q:"Choose synonym of 'Smart':",
o:["Intelligent","Dull","Weak","Slow"],
a:"Intelligent",
exp:"Smart means intelligent."
},

{
q:"Choose correct: She ___ a song now.",
o:["sing","sings","is singing","sang"],
a:"is singing",
exp:"Present continuous tense."
},

{
q:"Fill in: He depends ___ his parents.",
o:["of","on","with","for"],
a:"on",
exp:"Correct is 'depends on'."
}

];
}

return [];
}
let subject="",topics=[],tIndex=0;
let examQ=[],answers=[],index=0;


// ================= HOME =================

function showHome(){
app.innerHTML=`
<div class='card'>
<h2>Select Subject</h2>

<button onclick="menu('Math')">Mathematics</button>
<button onclick="menu('Physics')">Physics</button>
<button onclick="menu('Chemistry')">Chemistry</button>
<button onclick="menu('Biology')">Biology</button>
<button onclick="menu('English')">English</button>

</div>`;
}

function menu(sub){
subject=sub;
app.innerHTML=`
<div class='card'>
<h2>${sub}</h2>

<button onclick="startStudy()">📘 Study</button>
<button onclick="startExam()">📝 CBT Exam</button>
<button onclick="showHome()">⬅ Back</button>

</div>`;
}


// ================= STUDY =================

function startStudy(){
topics = studyData[subject];
tIndex = 0;
showTopic();
}

function showTopic(){
let t = topics[tIndex];

app.innerHTML=`
<div class='card'>
<h2>${t.title}</h2>
<p>${t.content}</p>

<h3>Examples</h3>
${t.examples.map(e=>`<p>• ${e}</p>`).join("")}

<h3>Exercises</h3>
${t.exercises.map(e=>`<p>• ${e}</p>`).join("")}
</div>

<div class='card'>
<button onclick="prevT()">Prev</button>
<button onclick="nextT()">Next</button>
<button onclick="showHome()">Home</button>
</div>`;
}

function nextT(){ if(tIndex<topics.length-1){tIndex++;showTopic();}}
function prevT(){ if(tIndex>0){tIndex--;showTopic();}}


// ================= CBT =================

function startExam(){
examQ = generateCBT(subject);
answers = new Array(40).fill(null);
index = 0;
showQ();
}

function showQ(){
  let q = examQ[index];


function pick(i){
  answers[index] = i;
  showQ();
}

app.innerHTML=`
<div class='card'>
<h3>${subject} Q${index+1}/40</h3>
<p>${q.q}</p>

${q.o.map(o=>`
<div class='option ${answers[index]===o?'selected':''}' onclick="pick('${o}')">${o}</div>
`).join("")}

</div>

<div class='card'>
<button onclick="prevQ()">Prev</button>
<button onclick="nextQ()">Next</button>
<button onclick="submit()">Submit</button>
</div>`;
}

function pick(o){
answers[index]=o;
showQ();
}

function nextQ(){ if(index<39){index++;showQ();}}
function prevQ(){ if(index>0){index--;showQ();}}

function submit(){
let score=0;

examQ.forEach((q,i)=>{
if(answers[i]===q.a) score++;
});

app.innerHTML=`
<div class='card'>
<h2>Score: ${score}/40</h2>
<button onclick="review()">Review Answers</button>
</div>`;
}

function review(){
app.innerHTML="<h2>Review</h2>";

examQ.forEach((q,i)=>{
app.innerHTML+=`
<div class='card'>
<p>${i+1}. ${q.q}</p>
<p>Your: ${answers[i]||"None"}</p>
<p>Correct: ${q.a}</p>
<p>${q.exp}</p>
</div>`;
});
}


// INIT
window.onload = () => {
  app = document.getElementById("app");
  showHome();
}