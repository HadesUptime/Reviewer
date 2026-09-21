// Complete question database with original and alternative questions
const allQuestions = [
    // Part I: Translational and Rotational Motion
    {
        id: 1,
        question: "A delivery cart moves forward while each wheel spins around its axle. Which description is correct?",
        options: [
            "The cart and wheels show rotational motion only.",
            "The cart translates while the wheels rotate.",
            "The cart rotates while the wheels translate.",
            "Neither motion occurs."
        ],
        correct: 1,
        rationale: "The cart changes position, so it undergoes translational motion, while the wheels turn about their axles, so they undergo rotational motion."
    },
    {
        id: 2,
        question: "A mechanic uses a longer handle to turn a stubborn valve. Why does this help?",
        options: [
            "It increases the lever arm and therefore the torque.",
            "It decreases the mass of the valve.",
            "It removes friction completely.",
            "It reduces gravitational acceleration."
        ],
        correct: 0,
        rationale: "Torque depends on the applied force and its distance from the pivot. A longer lever arm can produce greater torque for the same force."
    },
    {
        id: 3,
        question: "Which situation mainly demonstrates rotational motion without significant translation?",
        options: [
            "A bus traveling along a highway",
            "A ball rolling down a hallway",
            "A ceiling fan turning while fixed to the ceiling",
            "A cyclist moving around a track"
        ],
        correct: 2,
        rationale: "The fan blades rotate about a fixed axis while the fan assembly remains essentially in the same location."
    },
    {
        id: 4,
        question: "A rolling basketball crosses the court while spinning. What types of motion are present?",
        options: [
            "Translational only",
            "Rotational only",
            "Both translational and rotational",
            "Oscillatory only"
        ],
        correct: 2,
        rationale: "Its center moves across the court (translation) while the ball spins about its axis (rotation)."
    },
    {
        id: 5,
        question: "A wheel of fixed radius rotates faster while rolling without slipping. What happens to the linear speed of the wheel's center?",
        options: [
            "It decreases.",
            "It increases.",
            "It becomes zero.",
            "It is unrelated to rotation."
        ],
        correct: 1,
        rationale: "For rolling without slipping, v = rω. With constant radius, greater angular speed corresponds to greater linear speed."
    },
    {
        id: 6,
        question: "A dancer spins while moving from one side of the stage to the other. Which statement is most accurate?",
        options: [
            "Only translation occurs.",
            "Only rotation occurs.",
            "Both translation and rotation occur.",
            "No mechanical motion occurs."
        ],
        correct: 2,
        rationale: "Moving across the stage is translational motion, while spinning about the body axis is rotational motion."
    },
    {
        id: 7,
        question: "A student pushes a classroom door with the same force at two locations. Where should the student push to produce the greater turning effect?",
        options: [
            "Very close to the hinge",
            "At the handle, far from the hinge",
            "Directly on the hinge",
            "The location does not matter"
        ],
        correct: 1,
        rationale: "Applying the force farther from the pivot increases the lever arm and therefore the torque."
    },
    {
        id: 8,
        question: "A rotating amusement-park wheel completes more revolutions each minute. Which quantity has increased?",
        options: [
            "Mass",
            "Angular velocity",
            "Weight",
            "Density"
        ],
        correct: 1,
        rationale: "More rotation per unit time means a greater angular velocity."
    },
    {
        id: 9,
        question: "Which observation best shows that an object can rotate and translate simultaneously?",
        options: [
            "A clock hand turning",
            "A parked bicycle",
            "A soccer ball rolling forward",
            "A book lying on a table"
        ],
        correct: 2,
        rationale: "A rolling soccer ball moves forward while rotating about its own axis."
    },
    {
        id: 10,
        question: "A skater changes body position while spinning and begins rotating more rapidly. Which conclusion is supported by the Term I concepts?",
        options: [
            "Body configuration can affect rotational motion.",
            "Gravity has disappeared.",
            "The skater's mass has become zero.",
            "Rotational motion has changed into translation."
        ],
        correct: 0,
        rationale: "The examination emphasizes that changing body position can change rotational behavior, as in a figure skater pulling the arms inward."
    },
    // Alternative questions for Part I
    {
        id: 101,
        question: "When a car drives down a straight road, what type of motion does the car body experience?",
        options: [
            "Pure rotational motion",
            "Pure translational motion",
            "Both rotational and translational motion",
            "No motion"
        ],
        correct: 1,
        rationale: "The car body moves along a straight path without rotating about its center, so it experiences pure translational motion."
    },
    {
        id: 102,
        question: "Why is it easier to open a door by pushing on the handle rather than near the hinges?",
        options: [
            "The handle is made of stronger material",
            "The lever arm is longer, creating more torque",
            "Less force is needed near the hinges",
            "The door is lighter near the handle"
        ],
        correct: 1,
        rationale: "Torque = force × distance from pivot. A longer lever arm (handle) produces more torque for the same applied force."
    },
    {
        id: 103,
        question: "A spinning top rotates in place without moving across the floor. What type of motion is this?",
        options: [
            "Translational motion",
            "Rotational motion only",
            "Both translational and rotational",
            "Oscillatory motion"
        ],
        correct: 1,
        rationale: "The top spins about its axis but its center of mass remains stationary, so it only has rotational motion."
    },
    {
        id: 104,
        question: "If a wheel rolls without slipping and its angular speed doubles, what happens to its linear speed?",
        options: [
            "It stays the same",
            "It doubles",
            "It halves",
            "It becomes zero"
        ],
        correct: 1,
        rationale: "For rolling without slipping, v = rω. If ω doubles and r is constant, v also doubles."
    },
    {
        id: 105,
        question: "A figure skater pulls their arms inward while spinning. What happens to their rotation speed?",
        options: [
            "It decreases",
            "It increases",
            "It stays the same",
            "It becomes zero"
        ],
        correct: 1,
        rationale: "Conservation of angular momentum - when the moment of inertia decreases (arms pulled in), angular velocity increases."
    },

    // Part II: Simple and Compound Machines
    {
        id: 11,
        question: "Workers must move a heavy crate into a truck. Why can a long ramp make the task easier than lifting the crate vertically?",
        options: [
            "The ramp eliminates the crate's weight.",
            "The ramp reduces the required force by increasing the distance.",
            "The ramp removes gravity.",
            "The ramp creates energy."
        ],
        correct: 1,
        rationale: "An inclined plane trades a longer distance for a smaller required input force."
    },
    {
        id: 12,
        question: "Which simple machine is represented by a playground slide?",
        options: [
            "Lever",
            "Pulley",
            "Inclined plane",
            "Wheel and axle"
        ],
        correct: 2,
        rationale: "A slide is an inclined plane: a sloping surface that allows movement between different heights."
    },
    {
        id: 13,
        question: "A worker uses a pulley to lift supplies. Which is a valid advantage of a pulley system?",
        options: [
            "It can change the direction of force and, depending on the arrangement, reduce effort.",
            "It removes the mass of the load.",
            "It eliminates gravity.",
            "It creates unlimited energy."
        ],
        correct: 0,
        rationale: "Pulleys can redirect an applied force and pulley combinations can provide mechanical advantage."
    },
    {
        id: 14,
        question: "Why is a bicycle classified as a compound machine?",
        options: [
            "It contains only a wheel and axle.",
            "It combines several simple machines that work together.",
            "It has a metal frame.",
            "It always uses electricity."
        ],
        correct: 1,
        rationale: "A compound machine combines two or more simple machines or mechanisms to perform a task."
    },
    {
        id: 15,
        question: "A hand trolley makes it easier to move a heavy box across a floor mainly because its wheels:",
        options: [
            "increase the box's mass.",
            "reduce resistance by allowing rolling motion.",
            "increase gravity.",
            "produce new energy."
        ],
        correct: 1,
        rationale: "Wheels reduce the resistance associated with sliding the load directly across the floor."
    },
    {
        id: 16,
        question: "Which statement best describes an efficient machine?",
        options: [
            "It performs the same useful task with less wasted energy.",
            "It always has more parts.",
            "It must be heavier than other machines.",
            "It eliminates all energy losses."
        ],
        correct: 0,
        rationale: "Efficiency concerns how much input energy becomes useful output; improving efficiency reduces wasted energy."
    },
    {
        id: 17,
        question: "A school is comparing two lifting devices. Which evidence should receive the greatest weight?",
        options: [
            "Paint color and decoration",
            "Safety, reliability, efficiency, and useful performance",
            "Number of labels on the machine",
            "Weight alone"
        ],
        correct: 1,
        rationale: "The source examination repeatedly evaluates machines using functional criteria such as safety, reliability, and efficiency."
    },
    {
        id: 18,
        question: "A lower bicycle gear is useful when climbing a steep hill because it can help the rider obtain:",
        options: [
            "greater turning effect at the wheel.",
            "less gravitational acceleration.",
            "zero friction.",
            "a smaller bicycle mass."
        ],
        correct: 0,
        rationale: "The Term I examination links a lower gear with greater turning force or torque, making climbing easier."
    },
    {
        id: 19,
        question: "A can opener uses levers, gears, and wheel-like parts. What makes it a compound machine?",
        options: [
            "It is made of metal.",
            "It combines multiple simple-machine mechanisms.",
            "It has a handle.",
            "It requires human effort."
        ],
        correct: 1,
        rationale: "Its classification comes from combining several simple machines that work together."
    },
    {
        id: 20,
        question: "Which redesign best reflects sound engineering principles for a laboratory cart?",
        options: [
            "Decorative body with unstable wheels",
            "Stable platform, sturdy wheels, and reliable brakes",
            "Heavier frame with no brakes",
            "Smaller wheels regardless of load"
        ],
        correct: 1,
        rationale: "A good design prioritizes safe, stable, reliable operation rather than appearance or unnecessary mass."
    },
    // Alternative questions for Part II
    {
        id: 111,
        question: "Using a ramp to move a heavy box into a truck requires less force than lifting it straight up because:",
        options: [
            "The ramp reduces the weight of the box",
            "The ramp increases the distance over which force is applied",
            "The ramp eliminates gravity",
            "The ramp creates energy"
        ],
        correct: 1,
        rationale: "An inclined plane allows you to apply a smaller force over a longer distance to achieve the same work against gravity."
    },
    {
        id: 112,
        question: "A wheelchair ramp is an example of which simple machine?",
        options: [
            "Lever",
            "Pulley",
            "Inclined plane",
            "Screw"
        ],
        correct: 2,
        rationale: "A ramp is a sloping surface that allows movement between different heights, which is the definition of an inclined plane."
    },
    {
        id: 113,
        question: "What is the main benefit of using a block and tackle pulley system?",
        options: [
            "It changes the color of the load",
            "It can multiply the applied force",
            "It eliminates the need for any force",
            "It makes the load heavier"
        ],
        correct: 1,
        rationale: "A block and tackle system uses multiple pulleys to provide mechanical advantage, reducing the force needed to lift a load."
    },
    {
        id: 114,
        question: "A pair of scissors is considered a compound machine because it:",
        options: [
            "Has two blades",
            "Combines levers and a wedge",
            "Is made of metal",
            "Can cut paper"
        ],
        correct: 1,
        rationale: "Scissors combine two levers (the handles) with wedges (the blades), making them a compound machine."
    },
    {
        id: 115,
        question: "Why do furniture movers use a dolly with wheels instead of sliding heavy furniture across the floor?",
        options: [
            "Wheels make the furniture lighter",
            "Rolling friction is much less than sliding friction",
            "Wheels eliminate gravity",
            "Wheels create energy"
        ],
        correct: 1,
        rationale: "Wheels convert sliding friction to rolling friction, which requires significantly less force to overcome."
    },

    // Part III: Electricity, Energy, and Safety
    {
        id: 21,
        question: "A 15-W LED lamp operates for 6 hours. How much electrical energy does it use?",
        options: [
            "21 Wh",
            "90 Wh",
            "2.5 Wh",
            "900 Wh"
        ],
        correct: 1,
        rationale: "Using E = P × t: 15 W × 6 h = 90 Wh."
    },
    {
        id: 22,
        question: "Appliance A is rated 100 W and operates for 5 hours. Appliance B is rated 400 W and operates for 1 hour. Which uses more energy?",
        options: [
            "Appliance A",
            "Appliance B",
            "They use the same energy.",
            "Power rating alone cannot be used with the given times."
        ],
        correct: 0,
        rationale: "A uses 100 × 5 = 500 Wh, while B uses 400 × 1 = 400 Wh."
    },
    {
        id: 23,
        question: "Which household action best reduces unnecessary electricity use?",
        options: [
            "Keep lights on in empty rooms.",
            "Use efficient lighting and switch devices off when not needed.",
            "Use higher-wattage bulbs for the same lighting need.",
            "Leave every appliance operating continuously."
        ],
        correct: 1,
        rationale: "Efficient devices and avoiding unnecessary operation reduce electrical energy consumption and wastage."
    },
    {
        id: 24,
        question: "Why is an LED lighting upgrade generally consistent with energy-efficiency goals?",
        options: [
            "LEDs can provide useful lighting with less wasted energy.",
            "LEDs create electrical energy.",
            "LEDs require no current.",
            "LEDs eliminate all energy losses."
        ],
        correct: 0,
        rationale: "The Term I examination identifies LEDs as converting a greater proportion of electrical energy into useful light with less waste heat."
    },
    {
        id: 25,
        question: "During a long power interruption, why should a refrigerator door be kept closed as much as possible?",
        options: [
            "To stop gravity from acting on the food",
            "To reduce the entry of warmer surrounding air",
            "To generate new electrical energy",
            "To make the refrigerator heavier"
        ],
        correct: 1,
        rationale: "Keeping the door closed slows heat transfer into the refrigerator and helps the contents remain cold longer."
    },
    {
        id: 26,
        question: "A mobile phone becomes warm after extended use. Which energy explanation is best?",
        options: [
            "Electrical energy is transformed into useful operation and some thermal energy.",
            "The phone creates heat without using energy.",
            "All electrical energy becomes stored chemical energy.",
            "The surrounding air is always the only heat source."
        ],
        correct: 0,
        rationale: "Operating electronics transform electrical energy; some becomes useful work and some is dissipated as heat."
    },
    {
        id: 27,
        question: "Why should people avoid fallen electrical wires after a storm?",
        options: [
            "The wires may still be energized.",
            "Rain always makes electricity harmless.",
            "The wires lose all current immediately.",
            "Only thick wires can conduct electricity."
        ],
        correct: 0,
        rationale: "A fallen wire can remain connected to an electrical source and may still carry dangerous current."
    },
    {
        id: 28,
        question: "A helmet helps protect a cyclist during impact partly because it:",
        options: [
            "increases the stopping time and can reduce average force.",
            "eliminates momentum before the collision.",
            "removes kinetic energy from the universe.",
            "prevents gravity from acting."
        ],
        correct: 0,
        rationale: "For a given change in momentum, increasing the stopping time lowers the average impact force."
    },
    {
        id: 29,
        question: "A barangay hall wants to reduce electricity consumption. Which plan best matches the Term I principles?",
        options: [
            "Install efficient lamps and turn them off in unused rooms.",
            "Install more high-wattage lamps and leave them on.",
            "Run all appliances continuously.",
            "Replace efficient lamps with less efficient ones."
        ],
        correct: 0,
        rationale: "The plan combines efficient technology with responsible use, directly reducing energy wastage."
    },
    {
        id: 30,
        question: "Which statement about energy-efficient appliances is most appropriate?",
        options: [
            "They aim to provide useful performance while reducing unnecessary energy use.",
            "They do not use electrical energy.",
            "They always cost nothing to operate.",
            "They eliminate heat production completely."
        ],
        correct: 0,
        rationale: "Efficiency means obtaining useful output while minimizing energy losses; it does not mean zero energy use or zero losses."
    },
    // Alternative questions for Part III
    {
        id: 121,
        question: "A 60-watt light bulb is left on for 3 hours. How much energy does it consume?",
        options: [
            "20 Wh",
            "60 Wh",
            "180 Wh",
            "1800 Wh"
        ],
        correct: 2,
        rationale: "Energy = Power × Time = 60 W × 3 h = 180 Wh"
    },
    {
        id: 122,
        question: "Which device would use more energy: a 1000-watt heater for 1 hour or a 500-watt heater for 3 hours?",
        options: [
            "The 1000-watt heater",
            "The 500-watt heater",
            "Both use the same energy",
            "Cannot be determined"
        ],
        correct: 1,
        rationale: "1000W × 1h = 1000 Wh, 500W × 3h = 1500 Wh. The 500-watt heater uses more energy due to longer operating time."
    },
    {
        id: 123,
        question: "What is the most effective way to reduce your home electricity bill?",
        options: [
            "Use more appliances",
            "Use energy-efficient appliances and turn off unused devices",
            "Leave all lights on",
            "Use higher wattage bulbs"
        ],
        correct: 1,
        rationale: "Energy-efficient appliances convert more input energy into useful work, and turning off devices eliminates unnecessary energy consumption."
    },
    {
        id: 124,
        question: "Why do LED bulbs cost less to operate than incandescent bulbs producing the same amount of light?",
        options: [
            "LEDs are cheaper to buy",
            "LEDs convert more electrical energy into light and less into heat",
            "LEDs use no electricity",
            "LEDs are brighter"
        ],
        correct: 1,
        rationale: "LEDs are more efficient because they waste less energy as heat, converting a higher percentage of electrical energy into visible light."
    },
    {
        id: 125,
        question: "Why is it dangerous to touch a fallen power line, even if it's not sparking?",
        options: [
            "It might still be carrying electrical current",
            "It's never dangerous",
            "Only sparking wires are dangerous",
            "The wire is too hot to touch"
        ],
        correct: 0,
        rationale: "A fallen power line can still be energized and carry lethal current, even if there are no visible sparks."
    },

    // Part IV: Physics of Fluids
    {
        id: 31,
        question: "A student pushes inward on the plunger of a water-filled syringe. What happens to the pressure in the enclosed water?",
        options: [
            "It increases and the pressure is transmitted through the fluid.",
            "It becomes zero everywhere.",
            "It affects only one water molecule.",
            "It removes the water's mass."
        ],
        correct: 0,
        rationale: "An applied pressure in an enclosed fluid is transmitted through the fluid, consistent with Pascal's principle."
    },
    {
        id: 32,
        question: "Which principle is most directly involved in the operation of a hydraulic jack?",
        options: [
            "Pascal's principle",
            "Law of reflection",
            "Ohm's law",
            "Law of universal gravitation only"
        ],
        correct: 0,
        rationale: "A hydraulic jack relies on pressure applied to an enclosed fluid being transmitted throughout the fluid."
    },
    {
        id: 33,
        question: "Two differently shaped containers contain the same liquid. Points X and Y are at the same depth. How should their fluid pressures compare?",
        options: [
            "X must have greater pressure.",
            "Y must have greater pressure.",
            "They are the same if density and gravity are the same.",
            "Pressure depends only on container width."
        ],
        correct: 2,
        rationale: "Hydrostatic pressure at a given depth depends on density, gravity, and depth, not on container shape."
    },
    {
        id: 34,
        question: "Which change increases hydrostatic pressure at a point in the same liquid, assuming gravity is unchanged?",
        options: [
            "Decrease the depth.",
            "Increase the depth.",
            "Change only the container color.",
            "Make the container decorative."
        ],
        correct: 1,
        rationale: "Hydrostatic pressure follows P = ρgh, so increasing depth increases pressure."
    },
    {
        id: 35,
        question: "A hydraulic system has a small input piston and a larger output piston. Why can the output force be larger?",
        options: [
            "The transmitted pressure acts over a larger output area.",
            "The large piston removes gravity.",
            "The fluid creates energy from nothing.",
            "The load loses its mass."
        ],
        correct: 0,
        rationale: "Because P = F/A and pressure is transmitted, the same pressure acting on a larger area can produce a larger force."
    },
    {
        id: 36,
        question: "Which expression represents pressure?",
        options: [
            "P = F/A",
            "P = F × A",
            "P = m/v",
            "P = P × t"
        ],
        correct: 0,
        rationale: "Pressure is defined as force per unit area, P = F/A."
    },
    {
        id: 37,
        question: "A floating object displaces more water after its shape is modified while its total weight remains unchanged. What can happen to the buoyant force?",
        options: [
            "It can increase.",
            "It must become zero.",
            "Gravity stops acting.",
            "Water loses density."
        ],
        correct: 0,
        rationale: "Buoyant force is related to the weight of displaced fluid; displacing a greater volume can increase the buoyant force."
    },
    {
        id: 38,
        question: "Which statement best summarizes Archimedes' principle?",
        options: [
            "An immersed object experiences an upward force related to the weight of displaced fluid.",
            "All fluids have zero pressure.",
            "Objects float only when gravity disappears.",
            "Container shape alone determines buoyancy."
        ],
        correct: 0,
        rationale: "Archimedes' principle connects buoyant force to the weight of the fluid displaced by an immersed object."
    },
    {
        id: 39,
        question: "If the density of a liquid and gravitational acceleration stay constant, which variable directly changes the pressure ρgh?",
        options: [
            "Depth",
            "Container color",
            "Container brand",
            "Surface decoration"
        ],
        correct: 0,
        rationale: "In P = ρgh, with ρ and g fixed, pressure changes directly with depth h."
    },
    {
        id: 40,
        question: "Which explanation best describes why hydraulic systems can help lift heavy loads?",
        options: [
            "They transmit pressure through an enclosed fluid and use piston-area differences.",
            "They eliminate the weight of the load.",
            "They remove all friction and gravity.",
            "They reduce the mass of the load to zero."
        ],
        correct: 0,
        rationale: "Hydraulic devices use Pascal's principle together with different piston areas to obtain a larger output force."
    },
    // Alternative questions for Part IV
    {
        id: 131,
        question: "When you squeeze a sealed water bottle, what happens to the pressure inside?",
        options: [
            "It decreases",
            "It increases and is transmitted equally throughout",
            "It stays the same",
            "It becomes zero"
        ],
        correct: 1,
        rationale: "According to Pascal's principle, pressure applied to an enclosed fluid is transmitted undiminished to all parts of the fluid."
    },
    {
        id: 132,
        question: "A hydraulic lift can raise a car using a relatively small force. This is possible because:",
        options: [
            "The fluid creates energy",
            "A small force on a small piston creates pressure that acts on a larger piston area",
            "The car becomes lighter",
            "Gravity is reduced"
        ],
        correct: 1,
        rationale: "Pascal's principle: pressure applied to a small piston is transmitted to a larger piston, multiplying the force."
    },
    {
        id: 133,
        question: "At what depth is water pressure greater: 2 meters below the surface or 5 meters below the surface?",
        options: [
            "2 meters",
            "5 meters",
            "Same pressure at both depths",
            "Cannot be determined"
        ],
        correct: 1,
        rationale: "Hydrostatic pressure P = ρgh increases with depth, so pressure is greater at 5 meters than at 2 meters."
    },
    {
        id: 134,
        question: "Why does a steel ship float while a steel nail sinks?",
        options: [
            "The ship is made of different material",
            "The ship displaces more water, creating greater buoyant force",
            "The ship has no weight",
            "Water doesn't affect steel"
        ],
        correct: 1,
        rationale: "The ship's shape displaces a large volume of water, creating a buoyant force equal to its weight. The nail displaces very little water."
    },
    {
        id: 135,
        question: "What happens to the pressure at the bottom of a swimming pool if you dive deeper?",
        options: [
            "Pressure decreases",
            "Pressure increases",
            "Pressure stays the same",
            "Pressure becomes zero"
        ],
        correct: 1,
        rationale: "Pressure in a fluid increases with depth according to P = ρgh, where h is the depth below the surface."
    },

    // Part V: Integrated Physics and Engineering Applications
    {
        id: 41,
        question: "A warehouse wants a device for repeatedly lifting heavy materials. Which proposal is best supported by the Term I physics concepts?",
        options: [
            "A hydraulic lifting device with appropriate safety controls",
            "A decorative platform with no lifting mechanism",
            "A heavier manual box with no wheels",
            "A display board"
        ],
        correct: 0,
        rationale: "Hydraulic lifting systems are practical applications of fluid pressure and can improve productivity when designed safely."
    },
    {
        id: 42,
        question: "A machine performs the required task but wastes large amounts of energy. What should engineers primarily improve?",
        options: [
            "Efficiency",
            "Decoration",
            "Mass",
            "Color"
        ],
        correct: 0,
        rationale: "If useful performance is maintained while energy waste is reduced, machine efficiency improves."
    },
    {
        id: 43,
        question: "Which test result would best support approving a new school lifting device?",
        options: [
            "It safely moves the required load repeatedly with less effort.",
            "It has the brightest paint.",
            "It contains the most decorative parts.",
            "It is the heaviest design."
        ],
        correct: 0,
        rationale: "Functional testing should demonstrate safe, reliable, effective performance."
    },
    {
        id: 44,
        question: "A designer wants a cart that is both useful and safe. Which feature combination is best?",
        options: [
            "Sturdy wheels, stable load area, and secure brakes",
            "Unstable wheels and no brakes",
            "Very heavy frame only",
            "Decorative panels only"
        ],
        correct: 0,
        rationale: "The combination addresses movement, load stability, and stopping control."
    },
    {
        id: 45,
        question: "A city is selecting new public equipment. One option costs more initially but is safer and uses less energy over time. Which consideration supports choosing it?",
        options: [
            "Long-term efficiency and safety",
            "Appearance only",
            "Initial cost as the only criterion",
            "Maximum energy consumption"
        ],
        correct: 0,
        rationale: "The Term I questions emphasize evaluating designs using long-term efficiency and safety, not initial cost alone."
    },
    {
        id: 46,
        question: "Which proposed demonstration most clearly shows the relationship between translation and rotation?",
        options: [
            "Roll a ball across the floor and observe its forward motion and spin.",
            "Place a book on a table.",
            "Hold a ball without moving it.",
            "Turn off an electric fan."
        ],
        correct: 0,
        rationale: "A rolling ball provides simultaneous, directly observable translational and rotational motion."
    },
    {
        id: 47,
        question: "A student claims that wheels eliminate friction completely. Which response is most scientifically appropriate based on the examination?",
        options: [
            "Wheels can reduce resistance in many situations, but they do not eliminate friction completely.",
            "The claim is always correct.",
            "Wheels eliminate gravity instead.",
            "Friction exists only in fluids."
        ],
        correct: 0,
        rationale: "The examination treats wheels as reducing friction/resistance, not eliminating it."
    },
    {
        id: 48,
        question: "Which choice best demonstrates physics improving daily quality of life?",
        options: [
            "Using machines and appliances to perform tasks more efficiently and safely",
            "Adding decorations to equipment",
            "Increasing energy waste",
            "Ignoring safety systems"
        ],
        correct: 0,
        rationale: "The source examination frames physics applications in terms of useful technologies, efficiency, convenience, and safety."
    },
    {
        id: 49,
        question: "A machine design is cheaper to build but repeatedly fails its brakes. What is the strongest reason not to choose it?",
        options: [
            "Safety and reliability are essential engineering criteria.",
            "The machine may not have enough colors.",
            "Low price always means poor physics.",
            "Heavy machines are always safer."
        ],
        correct: 0,
        rationale: "A design that fails a critical safety system should not be favored merely because of lower initial cost."
    },
    {
        id: 50,
        question: "Which design goal best integrates the major ideas assessed in the Term I examination?",
        options: [
            "Create devices that perform useful tasks efficiently, safely, and reliably.",
            "Maximize energy waste.",
            "Use the greatest possible force in every task.",
            "Make all machines heavier."
        ],
        correct: 0,
        rationale: "Across the examination, good applications of physics are evaluated by useful performance, efficiency, safety, and reliability."
    },
    // Alternative questions for Part V
    {
        id: 141,
        question: "When designing a new product, what should be the primary consideration?",
        options: [
            "How colorful it looks",
            "How safely and efficiently it performs its function",
            "How expensive the materials are",
            "How heavy it is"
        ],
        correct: 1,
        rationale: "Good engineering prioritizes safety, efficiency, and reliable performance over cosmetic features."
    },
    {
        id: 142,
        question: "A machine uses 1000 J of energy but only does 300 J of useful work. What should engineers focus on improving?",
        options: [
            "The machine's color",
            "The machine's efficiency",
            "The machine's weight",
            "The machine's brand"
        ],
        correct: 1,
        rationale: "With only 30% efficiency (300/1000), the machine wastes too much energy. Engineers should improve efficiency to reduce waste."
    },
    {
        id: 143,
        question: "Why is safety testing important before releasing a new product?",
        options: [
            "It makes the product look better",
            "It ensures the product won't harm users and works reliably",
            "It increases the price",
            "It's required by law only"
        ],
        correct: 1,
        rationale: "Safety testing identifies potential hazards and ensures reliable operation, protecting users and preventing failures."
    },
    {
        id: 144,
        question: "A company must choose between two similar products. Product A costs less but has poor safety ratings. Product B costs more but is safer. Which should they choose?",
        options: [
            "Product A - save money",
            "Product B - safety is more important than initial cost",
            "Either one - they're the same",
            "Neither one"
        ],
        correct: 1,
        rationale: "Safety should be a primary consideration. The long-term costs of accidents and failures often exceed initial savings."
    },
    {
        id: 145,
        question: "What is the main purpose of engineering design?",
        options: [
            "To create decorative objects",
            "To solve problems and improve quality of life",
            "To use as much energy as possible",
            "To make things as heavy as possible"
        ],
        correct: 1,
        rationale: "Engineering aims to create solutions that improve life through efficient, safe, and reliable designs."
    },

    // Part VI: Quantitative and Higher-Order Review
    {
        id: 51,
        question: "A 60-W fan operates for 5 hours. A 20-W lamp operates for 10 hours. Which uses more electrical energy?",
        options: [
            "The fan",
            "The lamp",
            "They use the same energy.",
            "There is not enough information."
        ],
        correct: 0,
        rationale: "Fan: 60 × 5 = 300 Wh. Lamp: 20 × 10 = 200 Wh. The fan uses more energy."
    },
    {
        id: 52,
        question: "A student applies the same perpendicular force with a 0.20 m wrench and then a 0.40 m wrench. How does the torque compare?",
        options: [
            "The 0.40 m wrench produces twice the torque.",
            "The 0.20 m wrench produces twice the torque.",
            "Both produce zero torque.",
            "Torque is independent of lever-arm length."
        ],
        correct: 0,
        rationale: "For perpendicular force, τ = rF. Doubling r while keeping F constant doubles the torque."
    },
    {
        id: 53,
        question: "A fluid has constant density. Point B is twice as deep as Point A. Using P = ρgh for gauge pressure, how does B's pressure compare?",
        options: [
            "It is twice as large.",
            "It is half as large.",
            "It is the same.",
            "It becomes zero."
        ],
        correct: 0,
        rationale: "With ρ and g constant, pressure is directly proportional to depth. Doubling h doubles ρgh."
    },
    {
        id: 54,
        question: "In an ideal hydraulic system, the same pressure reaches two pistons. The output piston has four times the area of the input piston. The output force is:",
        options: [
            "four times the input force.",
            "one-fourth the input force.",
            "the same as the input force.",
            "zero."
        ],
        correct: 0,
        rationale: "Since F = PA, the same pressure acting on four times the area produces four times the force."
    },
    {
        id: 55,
        question: "A machine receives 500 J of input work and provides 400 J of useful output work. What is its efficiency?",
        options: [
            "20%",
            "80%",
            "100%",
            "125%"
        ],
        correct: 1,
        rationale: "Efficiency = (useful output/input) × 100 = (400/500) × 100 = 80%."
    },
    {
        id: 56,
        question: "A student wants to reduce the force needed to move a heavy load upward using an inclined plane. Which change is most consistent with the reviewed principle?",
        options: [
            "Use a longer ramp for the same height.",
            "Use a shorter, steeper ramp.",
            "Increase the load's mass.",
            "Remove the ramp."
        ],
        correct: 0,
        rationale: "For the same vertical height, a longer ramp increases the distance and reduces the ideal input force required."
    },
    {
        id: 57,
        question: "Which statement correctly distinguishes power from electrical energy in the examination contexts?",
        options: [
            "Power is a rate, while energy use depends on power and operating time.",
            "Power and energy are always identical.",
            "Energy depends only on wattage and never on time.",
            "Power is measured in watt-hours."
        ],
        correct: 0,
        rationale: "Power is the rate of energy transfer (watts); electrical energy over a period can be found from E = P × t."
    },
    {
        id: 58,
        question: "A rolling wheel suddenly stops rotating but its center continues sliding forward. Which description is now most accurate?",
        options: [
            "It has translational motion without rotational motion.",
            "It has rotational motion only.",
            "It has neither type of motion.",
            "Translation automatically stops whenever rotation stops."
        ],
        correct: 0,
        rationale: "If the center continues changing position while the wheel no longer spins, the remaining motion is translational."
    },
    {
        id: 59,
        question: "Which student conclusion best synthesizes the Term I topics?",
        options: [
            "Physics principles can be used to analyze motion, make work easier, improve energy use, explain fluids, and evaluate safer designs.",
            "Physics applies only to laboratory experiments.",
            "Machines remove the need for energy.",
            "Fluid pressure and motion have no practical applications."
        ],
        correct: 0,
        rationale: "The examination integrates physics in daily life, motion, machines, electricity, fluids, efficiency, and engineering evaluation."
    },
    {
        id: 60,
        question: "A school team must choose a final prototype. Which decision process is most scientifically defensible?",
        options: [
            "Compare measured performance, energy use, safety, reliability, and required effort.",
            "Choose the most colorful prototype.",
            "Choose the heaviest prototype without testing.",
            "Choose randomly because physics cannot guide design."
        ],
        correct: 0,
        rationale: "Evidence-based evaluation using performance, efficiency, safety, reliability, and effort aligns with the design reasoning assessed throughout the Term I examination."
    },
    // Alternative questions for Part VI
    {
        id: 151,
        question: "A 100-watt TV runs for 2 hours. A 50-watt lamp runs for 5 hours. Which consumes more energy?",
        options: [
            "The TV (200 Wh)",
            "The lamp (250 Wh)",
            "Both consume the same",
            "Cannot be determined"
        ],
        correct: 1,
        rationale: "TV: 100W × 2h = 200 Wh. Lamp: 50W × 5h = 250 Wh. The lamp uses more energy."
    },
    {
        id: 152,
        question: "If you apply a 10 N force at 0.5 m from a pivot, what is the torque? If you apply the same force at 1.0 m from the pivot, what is the torque?",
        options: [
            "5 Nm and 10 Nm",
            "10 Nm and 5 Nm",
            "5 Nm and 5 Nm",
            "10 Nm and 10 Nm"
        ],
        correct: 0,
        rationale: "Torque = force × distance. First: 10 N × 0.5 m = 5 Nm. Second: 10 N × 1.0 m = 10 Nm."
    },
    {
        id: 153,
        question: "In water, pressure at 10 meters depth is approximately 100 kPa. What is the pressure at 20 meters depth?",
        options: [
            "50 kPa",
            "100 kPa",
            "200 kPa",
            "400 kPa"
        ],
        correct: 2,
        rationale: "Pressure is proportional to depth. Doubling the depth from 10m to 20m doubles the pressure from 100 kPa to 200 kPa."
    },
    {
        id: 154,
        question: "A hydraulic press has a small piston of area 10 cm² and a large piston of area 100 cm². If you apply 100 N of force to the small piston, what force does the large piston exert?",
        options: [
            "10 N",
            "100 N",
            "1000 N",
            "10000 N"
        ],
        correct: 2,
        rationale: "Pressure = Force/Area = 100N/10cm² = 10 N/cm². This pressure acts on the large piston: Force = Pressure × Area = 10 N/cm² × 100 cm² = 1000 N."
    },
    {
        id: 155,
        question: "A motor does 800 J of work in 10 seconds. What is its power output?",
        options: [
            "8 W",
            "80 W",
            "800 W",
            "8000 W"
        ],
        correct: 1,
        rationale: "Power = Work/Time = 800 J / 10 s = 80 W"
    }
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
function selectRandomQuestions() {
    const selected = [];
    
    // Group questions by their base ID (1-60)
    for (let baseId = 1; baseId <= 60; baseId++) {
        const original = allQuestions.find(q => q.id === baseId);
        const alternative = allQuestions.find(q => q.id === baseId + 100);
        
        // 30% chance to use alternative if it exists
        if (alternative && Math.random() < 0.3) {
            selected.push(alternative);
        } else {
            selected.push(original);
        }
    }
    
    // Shuffle the selected questions
    return shuffleArray(selected);
}

// Current questions for this session
let questions = selectRandomQuestions();

// State management
let currentQuestionIndex = 0;
let userAnswers = {}; // Use object to store answers by question ID
let reviewAnswers = {}; // Store answers for review mode
let wrongQuestions = [];
let isReviewMode = false;
let reviewIndex = 0;

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

// Initialize
function init() {
    renderQuestion();
    updateStats();
    setupEventListeners();
}

// Render current question
function renderQuestion() {
    const currentQuestions = isReviewMode ? wrongQuestions : questions;
    const currentIndex = isReviewMode ? reviewIndex : currentQuestionIndex;
    
    if (currentQuestions.length === 0) {
        if (isReviewMode) {
            questionCard.classList.add('hidden');
            noWrongState.classList.remove('hidden');
        } else {
            questionCard.classList.add('hidden');
            emptyState.classList.remove('hidden');
        }
        return;
    }

    questionCard.classList.remove('hidden');
    emptyState.classList.add('hidden');
    noWrongState.classList.add('hidden');

    const question = currentQuestions[currentIndex];
    const userAnswer = isReviewMode ? reviewAnswers[question.id] : userAnswers[question.id];

    questionNumber.textContent = isReviewMode 
        ? `Wrong Question ${currentIndex + 1} of ${wrongQuestions.length}`
        : `Question ${currentIndex + 1} of ${questions.length}`;
    
    questionText.textContent = question.question;

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
        
        // Check if this option was selected
        if (userAnswer === index) {
            button.classList.add('selected');
        }
        
        // Show correct/wrong if answered
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

        optionsContainer.appendChild(button);
    });

    // Show feedback if answered
    if (userAnswer !== undefined && userAnswer !== null) {
        feedback.classList.remove('hidden');
        const isCorrect = userAnswer === question.correct;
        feedback.className = `mt-6 p-4 rounded-xl ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`;
        feedbackText.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
        feedbackText.className = `font-semibold mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`;
        rationale.textContent = question.rationale;
    } else {
        feedback.classList.add('hidden');
    }

    // Update navigation buttons
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentQuestions.length - 1;
}

// Select answer
function selectAnswer(index) {
    const currentQuestions = isReviewMode ? wrongQuestions : questions;
    const currentIndex = isReviewMode ? reviewIndex : currentQuestionIndex;
    const question = currentQuestions[currentIndex];

    if (isReviewMode) {
        // Store answer for review mode
        reviewAnswers[question.id] = index;
    } else {
        userAnswers[question.id] = index;
        
        // Track wrong answers
        if (index !== question.correct) {
            if (!wrongQuestions.find(q => q.id === question.id)) {
                wrongQuestions.push(question);
            }
        } else {
            // Remove from wrong if corrected
            wrongQuestions = wrongQuestions.filter(q => q.id !== question.id);
        }
    }

    renderQuestion();
    updateStats();
}

// Update statistics
function updateStats() {
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
    const progress = (answered / questions.length) * 100;
    const circumference = 2 * Math.PI * 28;
    const offset = circumference - (progress / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    progressText.textContent = `${Math.round(progress)}%`;

    // Update review button
    if (wrongQuestions.length > 0) {
        reviewBtn.classList.remove('hidden');
        reviewBtn.innerHTML = `<i class="fas fa-redo"></i> Review Wrong (${wrongQuestions.length})`;
    } else {
        reviewBtn.classList.add('hidden');
    }
}

// Setup event listeners
function setupEventListeners() {
    prevBtn.addEventListener('click', () => {
        if (isReviewMode) {
            reviewIndex--;
        } else {
            currentQuestionIndex--;
        }
        renderQuestion();
    });

    nextBtn.addEventListener('click', () => {
        if (isReviewMode) {
            reviewIndex++;
        } else {
            currentQuestionIndex++;
        }
        renderQuestion();
    });

    practiceModeBtn.addEventListener('click', () => {
        isReviewMode = false;
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        renderQuestion();
    });

    reviewModeBtn.addEventListener('click', () => {
        isReviewMode = true;
        reviewIndex = 0;
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        renderQuestion();
    });

    reviewBtn.addEventListener('click', () => {
        isReviewMode = true;
        reviewIndex = 0;
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        renderQuestion();
    });

    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        userAnswers = {};
        reviewAnswers = {};
        wrongQuestions = [];
       reviewIndex = 0;
        isReviewMode = false;
        questions = selectRandomQuestions(); // Re-randomize questions
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        renderQuestion();
        updateStats();
    });

    backToPracticeBtn.addEventListener('click', () => {
        isReviewMode = false;
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
       renderQuestion();
    });
}

// Start the app
init();
