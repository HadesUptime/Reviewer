// Science Questions - General Science 11 Term I
const scienceQuestions = [
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

// Mathematics Questions - General Mathematics Grade 11
const mathQuestions = [
    // Lesson 1: Calculating Salaries and Wages (Questions 1-10)
    {
        id: 1,
        subject: "math",
        question: "If an employee has an annual salary of ₱360,000, what is their monthly salary?",
        options: [
            "₱25,000",
            "₱30,000",
            "₱35,000",
            "₱40,000"
        ],
        correct: 1,
        rationale: "Monthly Salary = Annual Salary ÷ 12 = ₱360,000 ÷ 12 = ₱30,000"
    },
    {
        id: 2,
        subject: "math",
        question: "A worker earns ₱150 per hour and worked 45 hours this week. What is their regular pay (assuming 40 hours is regular)?",
        options: [
            "₱5,500",
            "₱6,000",
            "₱6,750",
            "₱7,500"
        ],
        correct: 1,
        rationale: "Regular Pay = Hourly Rate × Regular Hours = ₱150 × 40 = ₱6,000"
    },
    {
        id: 3,
        subject: "math",
        question: "If overtime pay is calculated at 1.5 times the regular rate, and a worker earns ₱200/hour with 5 overtime hours, what is the overtime pay?",
        options: [
            "₱1,000",
            "₱1,250",
            "₱1,500",
            "₱2,000"
        ],
        correct: 2,
        rationale: "Overtime Pay = Overtime Hours × Hourly Rate × OT Multiplier = 5 × ₱200 × 1.5 = ₱1,500"
    },
    {
        id: 4,
        subject: "math",
        question: "An employee's gross pay is ₱25,000. If total deductions are ₱4,500, what is the net pay?",
        options: [
            "₱20,500",
            "₱21,500",
            "₱29,500",
            "₱30,500"
        ],
        correct: 0,
        rationale: "Net Pay = Gross Pay − Total Deductions = ₱25,000 − ₱4,500 = ₱20,500"
    },
    {
        id: 5,
        subject: "math",
        question: "If a worker's net pay is ₱18,000 and deductions are ₱3,600, what is the gross pay?",
        options: [
            "₱14,400",
            "₱21,600",
            "₱22,000",
            "₱24,000"
        ],
        correct: 1,
        rationale: "Gross Pay = Net Pay + Deductions = ₱18,000 + ₱3,600 = ₱21,600"
    },
    {
        id: 6,
        subject: "math",
        question: "An employee earns ₱180/hour for the first 8 hours and ₱270/hour for overtime. If they worked 10 hours, what is their total pay?",
        options: [
            "₱1,620",
            "₱1,800",
            "₱1,980",
            "₱2,160"
        ],
        correct: 2,
        rationale: "Regular: 8 × ₱180 = ₱1,440. Overtime: 2 × ₱270 = ₱540. Total = ₱1,440 + ₱540 = ₱1,980"
    },
    {
        id: 7,
        subject: "math",
        question: "What is the annual salary of someone who earns ₱32,500 monthly?",
        options: [
            "₱360,000",
            "₱375,000",
            "₱390,000",
            "₱420,000"
        ],
        correct: 2,
        rationale: "Annual Salary = Monthly Salary × 12 = ₱32,500 × 12 = ₱390,000"
    },
    {
        id: 8,
        subject: "math",
        question: "If overtime multiplier is 2 (double time) and hourly rate is ₱125, what is the overtime pay for 4 hours?",
        options: [
            "₱500",
            "₱750",
            "₱1,000",
            "₱1,500"
        ],
        correct: 2,
        rationale: "Overtime Pay = 4 × ₱125 × 2 = ₱1,000"
    },
    {
        id: 9,
        subject: "math",
        question: "A worker's gross pay is ₱28,000 with deductions of ₱5,600 for taxes and ₱1,400 for other contributions. What is the net pay?",
        options: [
            "₱21,000",
            "₱22,400",
            "₱26,600",
            "₱35,000"
        ],
        correct: 0,
        rationale: "Total Deductions = ₱5,600 + ₱1,400 = ₱7,000. Net Pay = ₱28,000 − ₱7,000 = ₱21,000"
    },
    {
        id: 10,
        subject: "math",
        question: "If a daily wage is ₱800 and a worker worked 22 days in a month, what is their monthly salary?",
        options: [
            "₱15,200",
            "₱16,000",
            "₱17,600",
            "₱18,400"
        ],
        correct: 2,
        rationale: "Monthly Salary = Daily Wage × Days Worked = ₱800 × 22 = ₱17,600"
    },
    // Alternative questions for Lesson 1
    {
        id: 101,
        subject: "math",
        question: "A teacher earns an annual salary of ₱468,000. What is their monthly salary?",
        options: [
            "₱36,000",
            "₱39,000",
            "₱42,000",
            "₱45,000"
        ],
        correct: 1,
        rationale: "Monthly Salary = Annual Salary ÷ 12 = ₱468,000 ÷ 12 = ₱39,000"
    },
    {
        id: 102,
        subject: "math",
        question: "At ₱175 per hour for 38 regular hours and 6 overtime hours at 1.5×, what is the total pay?",
        options: [
            "₱6,650",
            "₱7,175",
            "₱7,700",
            "₱8,225"
        ],
        correct: 1,
        rationale: "Regular: 38 × ₱175 = ₱6,650. Overtime: 6 × ₱175 × 1.5 = ₱1,575. Total = ₱8,225"
    },

    // Lesson 2: Percentage Increase and Decrease (Questions 11-20)
    {
        id: 11,
        subject: "math",
        question: "What is 25% of 200?",
        options: [
            "25",
            "40",
            "50",
            "75"
        ],
        correct: 2,
        rationale: "25% of 200 = 0.25 × 200 = 50"
    },
    {
        id: 12,
        subject: "math",
        question: "If a price increases from ₱400 to ₱500, what is the percentage increase?",
        options: [
            "20%",
            "25%",
            "30%",
            "35%"
        ],
        correct: 1,
        rationale: "% Increase = [(500 − 400) ÷ 400] × 100% = (100 ÷ 400) × 100% = 25%"
    },
    {
        id: 13,
        subject: "math",
        question: "A product originally priced at ₱1,200 is now ₱960. What is the percentage decrease?",
        options: [
            "15%",
            "20%",
            "25%",
            "30%"
        ],
        correct: 1,
        rationale: "% Decrease = [(1200 − 960) ÷ 1200] × 100% = (240 ÷ 1200) × 100% = 20%"
    },
    {
        id: 14,
        subject: "math",
        question: "If a salary of ₱30,000 increases by 10%, what is the new salary?",
        options: [
            "₱31,000",
            "₱32,000",
            "₱33,000",
            "₱34,000"
        ],
        correct: 2,
        rationale: "New Value = Original(1 + r) = ₱30,000(1 + 0.10) = ₱30,000 × 1.10 = ₱33,000"
    },
    {
        id: 15,
        subject: "math",
        question: "After a 15% discount, a shirt costs ₱850. What was the original price?",
        options: [
            "₱950",
            "₱977.50",
            "₱1,000",
            "₱1,050"
        ],
        correct: 2,
        rationale: "Original = New ÷ (1 − r) = ₱850 ÷ 0.85 = ₱1,000"
    },
    {
        id: 16,
        subject: "math",
        question: "What is 12.5% as a decimal?",
        options: [
            "0.0125",
            "0.125",
            "1.25",
            "12.5"
        ],
        correct: 1,
        rationale: "12.5% = 12.5 ÷ 100 = 0.125"
    },
    {
        id: 17,
        subject: "math",
        question: "If 150 is 30% of a number, what is the number?",
        options: [
            "400",
            "450",
            "500",
            "550"
        ],
        correct: 2,
        rationale: "If 30% = 150, then 100% = 150 ÷ 0.30 = 500"
    },
    {
        id: 18,
        subject: "math",
        question: "A car depreciates by 20% each year. If it costs ₱800,000 now, what will it be worth after 1 year?",
        options: [
            "₱620,000",
            "₱640,000",
            "₱660,000",
            "₱680,000"
        ],
        correct: 1,
        rationale: "New Value = Original(1 − r) = ₱800,000(1 − 0.20) = ₱800,000 × 0.80 = ₱640,000"
    },
    {
        id: 19,
        subject: "math",
        question: "What percentage is 45 of 180?",
        options: [
            "20%",
            "22.5%",
            "25%",
            "27.5%"
        ],
        correct: 2,
        rationale: "Percentage = (45 ÷ 180) × 100% = 0.25 × 100% = 25%"
    },
    {
        id: 20,
        subject: "math",
        question: "If a number increases by 40% to become 280, what was the original number?",
        options: [
            "168",
            "180",
            "200",
            "220"
        ],
        correct: 2,
        rationale: "Original = New ÷ (1 + r) = 280 ÷ 1.40 = 200"
    },
    // Alternative questions for Lesson 2
    {
        id: 111,
        subject: "math",
        question: "A price decreases from ₱750 to ₱600. What is the percentage decrease?",
        options: [
            "15%",
            "18%",
            "20%",
            "25%"
        ],
        correct: 2,
        rationale: "% Decrease = [(750 − 600) ÷ 750] × 100% = (150 ÷ 750) × 100% = 20%"
    },
    {
        id: 112,
        subject: "math",
        question: "If ₱5,000 increases by 8%, what is the new amount?",
        options: [
            "₱5,300",
            "₱5,400",
            "₱5,500",
            "₱5,600"
        ],
        correct: 1,
        rationale: "New Value = ₱5,000(1 + 0.08) = ₱5,000 × 1.08 = ₱5,400"
    },

    // Lesson 3: Patterns and Sequences (Questions 21-30)
    {
        id: 21,
        subject: "math",
        question: "What is the next term in the arithmetic sequence: 3, 7, 11, 15, ...?",
        options: [
            "17",
            "18",
            "19",
            "21"
        ],
        correct: 2,
        rationale: "Common difference d = 4. Next term = 15 + 4 = 19"
    },
    {
        id: 22,
        subject: "math",
        question: "What is the common ratio in the geometric sequence: 2, 6, 18, 54, ...?",
        options: [
            "2",
            "3",
            "4",
            "6"
        ],
        correct: 1,
        rationale: "Common ratio r = 6 ÷ 2 = 3 (or 18 ÷ 6 = 3, 54 ÷ 18 = 3)"
    },
    {
        id: 23,
        subject: "math",
        question: "What is the 5th term of the Fibonacci sequence starting with 1, 1?",
        options: [
            "3",
            "5",
            "8",
            "13"
        ],
        correct: 1,
        rationale: "Fibonacci: 1, 1, 2, 3, 5. The 5th term is 5."
    },
    {
        id: 24,
        subject: "math",
        question: "What is the 6th triangular number?",
        options: [
            "15",
            "18",
            "21",
            "28"
        ],
        correct: 2,
        rationale: "Tₙ = n(n + 1) ÷ 2. T₆ = 6(7) ÷ 2 = 42 ÷ 2 = 21"
    },
    {
        id: 25,
        subject: "math",
        question: "What is the 7th square number?",
        options: [
            "36",
            "42",
            "49",
            "56"
        ],
        correct: 2,
        rationale: "Square number aₙ = n². a₇ = 7² = 49"
    },
    {
        id: 26,
        subject: "math",
        question: "What is the 4th cube number?",
        options: [
            "16",
            "27",
            "64",
            "81"
        ],
        correct: 2,
        rationale: "Cube number aₙ = n³. a₄ = 4³ = 64"
    },
    {
        id: 27,
        subject: "math",
        question: "What is the next term in the sequence: 2, 1, 3, 4, 7, 11, ...?",
        options: [
            "15",
            "16",
            "18",
            "22"
        ],
        correct: 2,
        rationale: "This is a Lucas-type sequence where each term is the sum of the previous two: 7 + 11 = 18"
    },
    {
        id: 28,
        subject: "math",
        question: "What is the 10th term of the arithmetic sequence with a₁ = 5 and d = 3?",
        options: [
            "30",
            "32",
            "35",
            "38"
        ],
        correct: 1,
        rationale: "aₙ = a₁ + (n − 1)d = 5 + (10 − 1)3 = 5 + 27 = 32"
    },
    {
        id: 29,
        subject: "math",
        question: "What is the 5th term of the geometric sequence with a₁ = 2 and r = 4?",
        options: [
            "64",
            "128",
            "256",
            "512"
        ],
        correct: 1,
        rationale: "aₙ = a₁rⁿ⁻¹ = 2(4)⁴ = 2 × 64 = 128"
    },
    {
        id: 30,
        subject: "math",
        question: "What is the pattern in: 5, 10, 7, 14, 11, 22, ...?",
        options: [
            "Add 5, subtract 3",
            "Multiply by 2, subtract 3",
            "Add 5, multiply by 2",
            "Multiply by 2, add 5"
        ],
        correct: 1,
        rationale: "This is an alternating pattern: ×2, −3, ×2, −3, ×2... 5×2=10, 10−3=7, 7×2=14, 14−3=11, 11×2=22"
    },
    // Alternative questions for Lesson 3
    {
        id: 121,
        subject: "math",
        question: "What is the next term in: 4, 12, 36, 108, ...?",
        options: [
            "216",
            "324",
            "432",
            "540"
        ],
        correct: 1,
        rationale: "Geometric sequence with r = 3. Next term = 108 × 3 = 324"
    },
    {
        id: 122,
        subject: "math",
        question: "What is the 8th term of the arithmetic sequence: 10, 15, 20, ...?",
        options: [
            "40",
            "42",
            "45",
            "50"
        ],
        correct: 2,
        rationale: "aₙ = a₁ + (n − 1)d = 10 + (8 − 1)5 = 10 + 35 = 45"
    },

    // Lesson 4: Sequences and Series in General (Questions 31-40)
    {
        id: 31,
        subject: "math",
        question: "What is the sum of the arithmetic series: 2 + 5 + 8 + 11 + 14?",
        options: [
            "35",
            "38",
            "40",
            "42"
        ],
        correct: 2,
        rationale: "Sₙ = n/2(a₁ + aₙ) = 5/2(2 + 14) = 2.5 × 16 = 40"
    },
    {
        id: 32,
        subject: "math",
        question: "Find the sum of the first 10 terms of the arithmetic sequence with a₁ = 3 and d = 5.",
        options: [
            "240",
            "255",
            "265",
            "280"
        ],
        correct: 2,
        rationale: "Sₙ = n/2[2a₁ + (n − 1)d] = 10/2[2(3) + 9(5)] = 5[6 + 45] = 5 × 51 = 255"
    },
    {
        id: 33,
        subject: "math",
        question: "What is the sum of the geometric series: 3 + 6 + 12 + 24 + 48?",
        options: [
            "87",
            "93",
            "96",
            "99"
        ],
        correct: 1,
        rationale: "Sₙ = a₁(rⁿ − 1)/(r − 1) = 3(2⁵ − 1)/(2 − 1) = 3(31)/1 = 93"
    },
    {
        id: 34,
        subject: "math",
        question: "Find the sum of the first 6 terms of the geometric sequence with a₁ = 4 and r = 3.",
        options: [
            "1,456",
            "1,458",
            "1,460",
            "1,464"
        ],
        correct: 1,
        rationale: "Sₙ = a₁(rⁿ − 1)/(r − 1) = 4(3⁶ − 1)/(3 − 1) = 4(728)/2 = 1,458"
    },
    {
        id: 35,
        subject: "math",
        question: "What is the sum of the infinite geometric series: 8 + 4 + 2 + 1 + ...?",
        options: [
            "14",
            "15",
            "16",
            "18"
        ],
        correct: 2,
        rationale: "S∞ = a₁/(1 − r) = 8/(1 − 0.5) = 8/0.5 = 16 (since |r| = 0.5 < 1)"
    },
    {
        id: 36,
        subject: "math",
        question: "Find the sum of the first 100 natural numbers (1 + 2 + 3 + ... + 100).",
        options: [
            "4,950",
            "5,000",
            "5,050",
            "5,100"
        ],
        correct: 2,
        rationale: "Σi = n(n + 1)/2 = 100(101)/2 = 5,050"
    },
    {
        id: 37,
        subject: "math",
        question: "What is the sum of the first 5 terms of the sequence: 1, 4, 9, 16, 25?",
        options: [
            "45",
            "50",
            "55",
            "60"
        ],
        correct: 2,
        rationale: "This is the sum of squares. Σi² = n(n + 1)(2n + 1)/6 = 5(6)(11)/6 = 55"
    },
    {
        id: 38,
        subject: "math",
        question: "Find the sum of the first 4 terms of the sequence: 1, 8, 27, 64.",
        options: [
            "90",
            "100",
            "110",
            "120"
        ],
        correct: 1,
        rationale: "This is the sum of cubes. Σi³ = [n(n + 1)/2]² = [4(5)/2]² = 10² = 100"
    },
    {
        id: 39,
        subject: "math",
        question: "What is the 15th term of the arithmetic sequence with a₁ = 10 and d = 7?",
        options: [
            "105",
            "108",
            "112",
            "115"
        ],
        correct: 1,
        rationale: "aₙ = a₁ + (n − 1)d = 10 + (15 − 1)7 = 10 + 98 = 108"
    },
    {
        id: 40,
        subject: "math",
        question: "Find the sum of the arithmetic series: 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15.",
        options: [
            "56",
            "60",
            "64",
            "68"
        ],
        correct: 2,
        rationale: "Sₙ = n/2(a₁ + aₙ) = 8/2(1 + 15) = 4 × 16 = 64"
    },
    // Alternative questions for Lesson 4
    {
        id: 131,
        subject: "math",
        question: "What is the sum of the infinite geometric series: 12 + 6 + 3 + 1.5 + ...?",
        options: [
            "20",
            "22",
            "24",
            "26"
        ],
        correct: 2,
        rationale: "S∞ = a₁/(1 − r) = 12/(1 − 0.5) = 12/0.5 = 24"
    },
    {
        id: 132,
        subject: "math",
        question: "Find the sum of the first 20 natural numbers.",
        options: [
            "190",
            "200",
            "210",
            "220"
        ],
        correct: 2,
        rationale: "Σi = n(n + 1)/2 = 20(21)/2 = 210"
    },

    // Lesson 5: Metric Units (Questions 41-50)
    {
        id: 41,
        subject: "math",
        question: "How many centimeters are in 2.5 meters?",
        options: [
            "25 cm",
            "250 cm",
            "2500 cm",
            "25000 cm"
        ],
        correct: 1,
        rationale: "1 m = 100 cm, so 2.5 m = 2.5 × 100 = 250 cm"
    },
    {
        id: 42,
        subject: "math",
        question: "Convert 3,500 grams to kilograms.",
        options: [
            "0.35 kg",
            "3.5 kg",
            "35 kg",
            "350 kg"
        ],
        correct: 1,
        rationale: "1 kg = 1,000 g, so 3,500 g = 3,500 ÷ 1,000 = 3.5 kg"
    },
    {
        id: 43,
        subject: "math",
        question: "How many milliliters are in 2.75 liters?",
        options: [
            "275 mL",
            "2,750 mL",
            "27,500 mL",
            "275,000 mL"
        ],
        correct: 1,
        rationale: "1 L = 1,000 mL, so 2.75 L = 2.75 × 1,000 = 2,750 mL"
    },
    {
        id: 44,
        subject: "math",
        question: "Convert 450 mm to meters.",
        options: [
            "0.045 m",
            "0.45 m",
            "4.5 m",
            "45 m"
        ],
        correct: 1,
        rationale: "1 m = 1,000 mm, so 450 mm = 450 ÷ 1,000 = 0.45 m"
    },
    {
        id: 45,
        subject: "math",
        question: "How many kilometers are in 15,000 meters?",
        options: [
            "1.5 km",
            "15 km",
            "150 km",
            "1,500 km"
        ],
        correct: 1,
        rationale: "1 km = 1,000 m, so 15,000 m = 15,000 ÷ 1,000 = 15 km"
    },
    {
        id: 46,
        subject: "math",
        question: "Convert 0.8 kg to grams.",
        options: [
            "8 g",
            "80 g",
            "800 g",
            "8,000 g"
        ],
        correct: 2,
        rationale: "1 kg = 1,000 g, so 0.8 kg = 0.8 × 1,000 = 800 g"
    },
    {
        id: 47,
        subject: "math",
        question: "How many centimeters are in 75 millimeters?",
        options: [
            "0.75 cm",
            "7.5 cm",
            "75 cm",
            "750 cm"
        ],
        correct: 1,
        rationale: "1 cm = 10 mm, so 75 mm = 75 ÷ 10 = 7.5 cm"
    },
    {
        id: 48,
        subject: "math",
        question: "Convert 5.2 km to meters.",
        options: [
            "52 m",
            "520 m",
            "5,200 m",
            "52,000 m"
        ],
        correct: 2,
        rationale: "1 km = 1,000 m, so 5.2 km = 5.2 × 1,000 = 5,200 m"
    },
    {
        id: 49,
        subject: "math",
        question: "How many liters are in 8,500 mL?",
        options: [
            "0.85 L",
            "8.5 L",
            "85 L",
            "850 L"
        ],
        correct: 1,
        rationale: "1 L = 1,000 mL, so 8,500 mL = 8,500 ÷ 1,000 = 8.5 L"
    },
    {
        id: 50,
        subject: "math",
        question: "Convert 3.6 m to centimeters.",
        options: [
            "36 cm",
            "360 cm",
            "3,600 cm",
            "36,000 cm"
        ],
        correct: 1,
        rationale: "1 m = 100 cm, so 3.6 m = 3.6 × 100 = 360 cm"
    },
    // Alternative questions for Lesson 5
    {
        id: 141,
        subject: "math",
        question: "Convert 4,250 mL to liters.",
        options: [
            "0.425 L",
            "4.25 L",
            "42.5 L",
            "425 L"
        ],
        correct: 1,
        rationale: "1 L = 1,000 mL, so 4,250 mL = 4,250 ÷ 1,000 = 4.25 L"
    },
    {
        id: 142,
        subject: "math",
        question: "How many meters are in 0.05 km?",
        options: [
            "5 m",
            "50 m",
            "500 m",
            "5,000 m"
        ],
        correct: 1,
        rationale: "1 km = 1,000 m, so 0.05 km = 0.05 × 1,000 = 50 m"
    },

    // Lesson 6: Sequences and Series in Finance (Questions 51-60)
    {
        id: 51,
        subject: "math",
        question: "If you borrow ₱500,000 at 6% annual interest for 20 years (monthly payments), what is i (interest rate per period)?",
        options: [
            "0.005",
            "0.006",
            "0.06",
            "0.6"
        ],
        correct: 0,
        rationale: "i = annual rate ÷ periods per year = 0.06 ÷ 12 = 0.005"
    },
    {
        id: 52,
        subject: "math",
        question: "If you invest ₱2,000 monthly at 8% annual interest for 10 years, what is n (number of periods)?",
        options: [
            "10",
            "60",
            "120",
            "240"
        ],
        correct: 2,
        rationale: "n = years × periods per year = 10 × 12 = 120"
    },
    {
        id: 53,
        subject: "math",
        question: "What is the future value of a lump sum of ₱100,000 invested at 5% for 3 years?",
        options: [
            "₱115,000",
            "₱115,762.50",
            "₱125,000",
            "₱157,625"
        ],
        correct: 1,
        rationale: "FV = PV(1 + i)ⁿ = ₱100,000(1.05)³ = ₱100,000 × 1.157625 = ₱115,762.50"
    },
    {
        id: 54,
        subject: "math",
        question: "If you make 24 equal payments of ₱5,000 each, what is the total amount paid?",
        options: [
            "₱100,000",
            "₱120,000",
            "₱150,000",
            "₱200,000"
        ],
        correct: 1,
        rationale: "Total = nP = 24 × ₱5,000 = ₱120,000"
    },
    {
        id: 55,
        subject: "math",
        question: "A loan of ₱300,000 has monthly payments of ₱2,500 for 15 years. What is the total paid?",
        options: [
            "₱300,000",
            "₱450,000",
            "₱500,000",
            "₱550,000"
        ],
        correct: 1,
        rationale: "n = 15 × 12 = 180. Total = 180 × ₱2,500 = ₱450,000"
    },
    {
        id: 56,
        subject: "math",
        question: "If ₱50,000 earns 4% interest compounded annually for 2 years, what is the future value?",
        options: [
            "₱54,000",
            "₱54,080",
            "₱58,000",
            "₱58,320"
        ],
        correct: 1,
        rationale: "FV = PV(1 + i)ⁿ = ₱50,000(1.04)² = ₱50,000 × 1.0816 = ₱54,080"
    },
    {
        id: 57,
        subject: "math",
        question: "What is the present value of ₱50,000 to be received in 5 years at 6% interest?",
        options: [
            "₱35,000",
            "₱37,362.90",
            "₱40,000",
            "₱42,500"
        ],
        correct: 1,
        rationale: "PV = FV ÷ (1 + i)ⁿ = ₱50,000 ÷ (1.06)⁵ = ₱50,000 ÷ 1.3382 ≈ ₱37,362.90"
    },
    {
        id: 58,
        subject: "math",
        question: "If you save ₱3,000 monthly for 5 years at 6% annual interest, what is n?",
        options: [
            "5",
            "12",
            "60",
            "120"
        ],
        correct: 2,
        rationale: "n = years × periods per year = 5 × 12 = 60"
    },
    {
        id: 59,
        subject: "math",
        question: "A lump sum of ₱200,000 doubles in 10 years. What is the annual interest rate (approximately)?",
        options: [
            "5%",
            "7%",
            "10%",
            "12%"
        ],
        correct: 1,
        rationale: "Using Rule of 72: 72 ÷ 10 ≈ 7.2%. Or: 2 = (1 + r)¹⁰, so r ≈ 7.2%"
    },
    {
        id: 60,
        subject: "math",
        question: "If monthly payments are ₱8,000 for 180 months, what is the total paid?",
        options: [
            "₱800,000",
            "₱1,000,000",
            "₱1,440,000",
            "₱1,800,000"
        ],
        correct: 2,
        rationale: "Total = nP = 180 × ₱8,000 = ₱1,440,000"
    },
    // Alternative questions for Lesson 6
    {
        id: 151,
        subject: "math",
        question: "If you borrow ₱800,000 at 8% annual interest for 25 years (monthly payments), what is i?",
        options: [
            "0.0067",
            "0.008",
            "0.08",
            "0.8"
        ],
        correct: 0,
        rationale: "i = annual rate ÷ periods per year = 0.08 ÷ 12 ≈ 0.0067"
    },
    {
        id: 152,
        subject: "math",
        question: "What is the future value of ₱75,000 at 6% for 4 years?",
        options: [
            "₱84,000",
            "₱89,000",
            "₱94,678.50",
            "₱100,000"
        ],
        correct: 2,
        rationale: "FV = PV(1 + i)ⁿ = ₱75,000(1.06)⁴ = ₱75,000 × 1.2625 ≈ ₱94,678.50"
    },

    // Lesson 7: Sigma Notation (Questions 61-70) - Adding extra to reach 60
    {
        id: 61,
        subject: "math",
        question: "What is Σ (from i=1 to 5) i?",
        options: [
            "10",
            "15",
            "20",
            "25"
        ],
        correct: 1,
        rationale: "Σi = 1 + 2 + 3 + 4 + 5 = 15"
    },
    {
        id: 62,
        subject: "math",
        question: "What is Σ (from i=1 to 4) 2i?",
        options: [
            "8",
            "12",
            "16",
            "20"
        ],
        correct: 3,
        rationale: "Σ2i = 2(1) + 2(2) + 2(3) + 2(4) = 2 + 4 + 6 + 8 = 20"
    },
    {
        id: 63,
        subject: "math",
        question: "What is Σ (from i=1 to 3) i²?",
        options: [
            "6",
            "9",
            "14",
            "18"
        ],
        correct: 2,
        rationale: "Σi² = 1² + 2² + 3² = 1 + 4 + 9 = 14"
    },
    {
        id: 64,
        subject: "math",
        question: "Using the formula, what is Σ (from i=1 to 10) i?",
        options: [
            "45",
            "50",
            "55",
            "60"
        ],
        correct: 2,
        rationale: "Σi = n(n + 1)/2 = 10(11)/2 = 55"
    },
    {
        id: 65,
        subject: "math",
        question: "What is Σ (from i=1 to 4) 3?",
        options: [
            "3",
            "6",
            "9",
            "12"
        ],
        correct: 3,
        rationale: "Σ3 = 3 + 3 + 3 + 3 = 12 (adding 3 four times)"
    },
    {
        id: 66,
        subject: "math",
        question: "What is Σ (from i=1 to 3) (i + 1)?",
        options: [
            "6",
            "7",
            "8",
            "9"
        ],
        correct: 3,
        rationale: "Σ(i + 1) = (1+1) + (2+1) + (3+1) = 2 + 3 + 4 = 9"
    },
    {
        id: 67,
        subject: "math",
        question: "Using the formula, what is Σ (from i=1 to 5) i²?",
        options: [
            "45",
            "50",
            "55",
            "65"
        ],
        correct: 2,
        rationale: "Σi² = n(n + 1)(2n + 1)/6 = 5(6)(11)/6 = 55"
    },
    {
        id: 68,
        subject: "math",
        question: "What is Σ (from i=1 to 3) i³?",
        options: [
            "18",
            "27",
            "36",
            "45"
        ],
        correct: 2,
        rationale: "Σi³ = 1³ + 2³ + 3³ = 1 + 8 + 27 = 36"
    },
    {
        id: 69,
        subject: "math",
        question: "What is Σ (from i=1 to 4) (2i + 1)?",
        options: [
            "16",
            "20",
            "24",
            "28"
        ],
        correct: 1,
        rationale: "Σ(2i + 1) = (2×1+1) + (2×2+1) + (2×3+1) + (2×4+1) = 3 + 5 + 7 + 9 = 24"
    },
    {
        id: 70,
        subject: "math",
        question: "Using the cube sum formula, what is Σ (from i=1 to 4) i³?",
        options: [
            "64",
            "81",
            "100",
            "125"
        ],
        correct: 2,
        rationale: "Σi³ = [n(n + 1)/2]² = [4(5)/2]² = 10² = 100"
    }
];

// Biology Questions - Biology 1 Term 1
const biologyQuestions = [
    // I. Biology and Its Branches (Questions 1-5)
    {
        id: 1,
        subject: "biology",
        question: "A scientist is studying how a population of deer interacts with the plants and other animals in a forest ecosystem. Which branch of biology is most relevant to this study?",
        options: [
            "Genetics",
            "Ecology",
            "Physiology",
            "Morphology"
        ],
        correct: 1,
        rationale: "Ecology studies interactions among organisms and their environment, which matches the scenario of studying deer in a forest ecosystem."
    },
    {
        id: 2,
        subject: "biology",
        question: "A researcher is investigating how blue eye color is passed from parents to children across generations. This study belongs to which branch of biology?",
        options: [
            "Genetics",
            "Histology",
            "Biochemistry",
            "Embryology"
        ],
        correct: 0,
        rationale: "Genetics is the study of genes, heredity, and transmission of traits, which describes the study of eye color inheritance."
    },
    {
        id: 3,
        subject: "biology",
        question: "A doctor is examining tissue samples under a microscope to diagnose a disease. Which branch of biology involves the microscopic study of tissues?",
        options: [
            "Morphology",
            "Physiology",
            "Histology",
            "Biochemistry"
        ],
        correct: 2,
        rationale: "Histology is the microscopic study of tissues, which is what the doctor is doing with tissue samples."
    },
    {
        id: 4,
        subject: "biology",
        question: "A scientist is studying the chemical reactions that occur during cellular respiration. This falls under which branch of biology?",
        options: [
            "Embryology",
            "Biochemistry",
            "Ecology",
            "Morphology"
        ],
        correct: 1,
        rationale: "Biochemistry studies chemical processes in living organisms, such as those in cellular respiration."
    },
    {
        id: 5,
        subject: "biology",
        question: "When studying the development of a fertilized egg into a fully formed organism, which branch of biology would be most relevant?",
        options: [
            "Embryology",
            "Genetics",
            "Physiology",
            "Ecology"
        ],
        correct: 0,
        rationale: "Embryology studies the development of organisms, from fertilized egg to fully formed organism."
    },

    // II. Cell Theory (Questions 6-10)
    {
        id: 6,
        subject: "biology",
        question: "A student observes that all the bacteria in a culture dish came from existing bacteria that were already present. Which principle of cell theory does this observation support?",
        options: [
            "All living organisms are composed of one or more cells",
            "Cell is the basic unit of life",
            "All cells arise from pre-existing cells",
            "Cells contain genetic material"
        ],
        correct: 2,
        rationale: "The observation that bacteria come from existing bacteria supports the principle that all cells arise from pre-existing cells."
    },
    {
        id: 7,
        subject: "biology",
        question: "Which scientist is credited with observing cork cells and introducing the term 'cell'?",
        options: [
            "Antonie van Leeuwenhoek",
            "Robert Hooke",
            "Matthias Schleiden",
            "Theodor Schwann"
        ],
        correct: 1,
        rationale: "Robert Hooke observed cork and introduced the term 'cell'."
    },
    {
        id: 8,
        subject: "biology",
        question: "A scientist claims that plants are composed of cells. Which scientist's work supports this claim?",
        options: [
            "Rudolf Virchow",
            "Theodor Schwann",
            "Matthias Schleiden",
            "Robert Hooke"
        ],
        correct: 2,
        rationale: "Matthias Schleiden concluded that plants are composed of cells."
    },
    {
        id: 9,
        subject: "biology",
        question: "Who proposed that animals are composed of cells?",
        options: [
            "Matthias Schleiden",
            "Theodor Schwann",
            "Rudolf Virchow",
            "Antonie van Leeuwenhoek"
        ],
        correct: 1,
        rationale: "Theodor Schwann concluded that animals are composed of cells."
    },
    {
        id: 10,
        subject: "biology",
        question: "Which scientist is associated with the principle that cells arise from pre-existing cells?",
        options: [
            "Robert Hooke",
            "Antonie van Leeuwenhoek",
            "Rudolf Virchow",
            "Matthias Schleiden"
        ],
        correct: 2,
        rationale: "Rudolf Virchow proposed that cells arise from pre-existing cells."
    },

    // III. Prokaryotic vs Eukaryotic (Questions 11-15)
    {
        id: 11,
        subject: "biology",
        question: "A bacterium is found to have its DNA floating in the nucleoid region without a nuclear membrane. Is this cell prokaryotic or eukaryotic?",
        options: [
            "Prokaryotic",
            "Eukaryotic",
            "Both",
            "Neither"
        ],
        correct: 0,
        rationale: "Prokaryotic cells have DNA in the nucleoid and no membrane-bound nucleus or organelles."
    },
    {
        id: 12,
        subject: "biology",
        question: "A cell contains mitochondria, endoplasmic reticulum, and a membrane-bound nucleus. What type of cell is this?",
        options: [
            "Prokaryotic",
            "Eukaryotic",
            "Virus",
            "Prion"
        ],
        correct: 1,
        rationale: "Eukaryotic cells have a membrane-bound nucleus and membrane-bound organelles like mitochondria and ER."
    },
    {
        id: 13,
        subject: "biology",
        question: "If a cell has a nucleoid but lacks mitochondria and Golgi apparatus, how would you classify it?",
        options: [
            "Eukaryotic",
            "Prokaryotic",
            "Plant cell",
            "Animal cell"
        ],
        correct: 1,
        rationale: "Nucleoid + no membrane-bound organelles = prokaryotic."
    },
    {
        id: 14,
        subject: "biology",
        question: "A student is examining a cell under a microscope and observes a nucleus, mitochondria, and ER. What conclusion can they draw?",
        options: [
            "The cell is prokaryotic",
            "The cell is eukaryotic",
            "The cell is a virus",
            "The cell is dead"
        ],
        correct: 1,
        rationale: "Nucleus + mitochondria + ER = eukaryotic."
    },
    {
        id: 15,
        subject: "biology",
        question: "Which of the following structures would you NOT expect to find in a prokaryotic cell?",
        options: [
            "DNA",
            "Ribosomes",
            "Nucleus",
            "Cell membrane"
        ],
        correct: 2,
        rationale: "Prokaryotic cells lack a membrane-bound nucleus, though they have DNA, ribosomes, and cell membrane."
    },

    // IV. Cell Cycle (Questions 16-20)
    {
        id: 16,
        subject: "biology",
        question: "During which phase of the cell cycle does DNA replication occur?",
        options: [
            "G₁ phase",
            "S phase",
            "G₂ phase",
            "M phase"
        ],
        correct: 1,
        rationale: "DNA replication occurs during S (Synthesis) phase."
    },
    {
        id: 17,
        subject: "biology",
        question: "A cell is growing and performing its normal functions but not replicating DNA. Which phase is it likely in?",
        options: [
            "S phase",
            "G₁ phase",
            "G₂ phase",
            "M phase"
        ],
        correct: 1,
        rationale: "G₁ phase is when the cell grows and performs normal functions before DNA replication."
    },
    {
        id: 18,
        subject: "biology",
        question: "What is the purpose of DNA replication during the cell cycle?",
        options: [
            "To increase cell size",
            "To ensure genetic material can be distributed to daughter cells",
            "To produce proteins",
            "To generate energy"
        ],
        correct: 1,
        rationale: "DNA replication ensures genetic material can be distributed to daughter cells."
    },
    {
        id: 19,
        subject: "biology",
        question: "During which phase does the cell prepare for division after DNA has been replicated?",
        options: [
            "G₁ phase",
            "S phase",
            "G₂ phase",
            "Cytokinesis"
        ],
        correct: 2,
        rationale: "G₂ phase is when the cell grows and prepares for cell division after DNA replication."
    },
    {
        id: 20,
        subject: "biology",
        question: "In what order do the phases of the cell cycle occur?",
        options: [
            "M → G₁ → S → G₂ → Cytokinesis",
            "G₁ → S → G₂ → M → Cytokinesis",
            "S → G₁ → G₂ → M → Cytokinesis",
            "G₂ → S → G₁ → M → Cytokinesis"
        ],
        correct: 1,
        rationale: "The correct order is Interphase (G₁, S, G₂) → M Phase → Cytokinesis."
    },

    // V. Mitosis (Questions 21-25)
    {
        id: 21,
        subject: "biology",
        question: "During which phase of mitosis do chromosomes align at the equatorial plane?",
        options: [
            "Prophase",
            "Metaphase",
            "Anaphase",
            "Telophase"
        ],
        correct: 1,
        rationale: "During metaphase, chromosomes align at the equatorial plane."
    },
    {
        id: 22,
        subject: "biology",
        question: "What happens during anaphase of mitosis?",
        options: [
            "Chromosomes condense",
            "Sister chromatids separate and move to opposite poles",
            "New nuclear envelopes form",
            "Chromosomes align at the equator"
        ],
        correct: 1,
        rationale: "During anaphase, sister chromatids separate and move to opposite poles."
    },
    {
        id: 23,
        subject: "biology",
        question: "How does cytokinesis differ between animal and plant cells?",
        options: [
            "Animal cells form a cell plate, plant cells form a cleavage furrow",
            "Animal cells form a cleavage furrow, plant cells form a cell plate",
            "Both form cleavage furrows",
            "Both form cell plates"
        ],
        correct: 1,
        rationale: "Animal cells form a cleavage furrow, while plant cells form a cell plate during cytokinesis."
    },
    {
        id: 24,
        subject: "biology",
        question: "What is the result of mitosis in terms of daughter cells?",
        options: [
            "Four genetically different haploid cells",
            "Two genetically identical diploid cells",
            "Two genetically different haploid cells",
            "Four genetically identical diploid cells"
        ],
        correct: 1,
        rationale: "Mitosis produces two genetically identical daughter cells with the same chromosome number as the parent."
    },
    {
        id: 25,
        subject: "biology",
        question: "During which phase of mitosis do chromosomes condense and the nuclear envelope break down?",
        options: [
            "Prophase",
            "Metaphase",
            "Anaphase",
            "Telophase"
        ],
        correct: 0,
        rationale: "During prophase, chromosomes condense and the nuclear envelope breaks down."
    },

    // VI. Cell Cycle Checkpoints (Questions 26-30)
    {
        id: 26,
        subject: "biology",
        question: "If a cell has damaged DNA at the G₁ checkpoint, what might happen?",
        options: [
            "The cell immediately divides",
            "The cell cycle may stop until repair occurs or enter G₀",
            "The cell skips to M phase",
            "The cell undergoes meiosis"
        ],
        correct: 1,
        rationale: "Damaged DNA at G₁ checkpoint may cause the cell cycle to stop until repair occurs or enter G₀."
    },
    {
        id: 27,
        subject: "biology",
        question: "What can happen if cell cycle checkpoints fail?",
        options: [
            "Cell death",
            "Uncontrolled cell division which may contribute to cancer",
            "Normal cell division",
            "Increased DNA repair"
        ],
        correct: 1,
        rationale: "Checkpoint failure can lead to uncontrolled cell division, which may contribute to cancer."
    },
    {
        id: 28,
        subject: "biology",
        question: "What is the purpose of cell cycle checkpoints?",
        options: [
            "To speed up cell division",
            "To regulate progression and prevent damaged cells from dividing",
            "To increase genetic variation",
            "To produce more ATP"
        ],
        correct: 1,
        rationale: "Checkpoints regulate progression through the cell cycle and help prevent damaged cells from dividing."
    },
    {
        id: 29,
        subject: "biology",
        question: "A cell enters G₀ phase. What does this indicate?",
        options: [
            "The cell is actively dividing",
            "The cell is in a resting phase and not preparing to divide",
            "The cell is undergoing DNA replication",
            "The cell is in mitosis"
        ],
        correct: 1,
        rationale: "G₀ is a resting phase where the cell is not preparing to divide."
    },
    {
        id: 30,
        subject: "biology",
        question: "Which checkpoint is most critical for preventing cancer development?",
        options: [
            "The checkpoint that allows all cells to divide",
            "The checkpoint that stops damaged cells from dividing",
            "The checkpoint that speeds up division",
            "The checkpoint that skips DNA repair"
        ],
        correct: 1,
        rationale: "The checkpoint that stops damaged cells from dividing is critical for preventing cancer development."
    },

    // VII. Meiosis (Questions 31-35)
    {
        id: 31,
        subject: "biology",
        question: "What is the purpose of meiosis?",
        options: [
            "Cell growth and repair",
            "Production of haploid cells for sexual reproduction",
            "Production of identical daughter cells",
            "DNA replication"
        ],
        correct: 1,
        rationale: "Meiosis produces haploid cells for sexual reproduction."
    },
    {
        id: 32,
        subject: "biology",
        question: "During which phase of meiosis does crossing over occur?",
        options: [
            "Metaphase I",
            "Anaphase I",
            "Prophase I",
            "Telophase II"
        ],
        correct: 2,
        rationale: "Crossing over occurs during Prophase I when homologous chromosomes pair to form tetrads."
    },
    {
        id: 33,
        subject: "biology",
        question: "How many divisions occur in meiosis?",
        options: [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        correct: 1,
        rationale: "Meiosis involves two divisions: Meiosis I and Meiosis II."
    },
    {
        id: 34,
        subject: "biology",
        question: "What is the final result of meiosis?",
        options: [
            "Two genetically identical diploid cells",
            "Four genetically different haploid cells",
            "Two genetically different haploid cells",
            "Four genetically identical diploid cells"
        ],
        correct: 1,
        rationale: "Meiosis results in four genetically different haploid cells."
    },
    {
        id: 35,
        subject: "biology",
        question: "When does DNA replication occur in meiosis?",
        options: [
            "Before Meiosis I only",
            "Before Meiosis II only",
            "Before both Meiosis I and Meiosis II",
            "After Meiosis II"
        ],
        correct: 0,
        rationale: "DNA replication occurs before Meiosis I only."
    },

    // VIII. Genetic Variation (Questions 36-40)
    {
        id: 36,
        subject: "biology",
        question: "What is crossing over?",
        options: [
            "Separation of sister chromatids",
            "Exchange of genetic material between homologous chromosomes",
            "Random arrangement of chromosomes",
            "Division of cytoplasm"
        ],
        correct: 1,
        rationale: "Crossing over is the exchange of genetic material between homologous chromosomes during Prophase I."
    },
    {
        id: 37,
        subject: "biology",
        question: "During which phase does independent assortment occur?",
        options: [
            "Prophase I",
            "Metaphase I",
            "Anaphase I",
            "Telophase I"
        ],
        correct: 1,
        rationale: "Independent assortment occurs during Metaphase I when homologous pairs align randomly."
    },
    {
        id: 38,
        subject: "biology",
        question: "If crossing over does not occur, what happens to genetic variation?",
        options: [
            "It increases",
            "It is reduced but chromosome number still decreases",
            "It remains the same",
            "It becomes zero"
        ],
        correct: 1,
        rationale: "If crossing over does not occur, genetic variation is reduced but chromosome number can still be reduced normally."
    },
    {
        id: 39,
        subject: "biology",
        question: "What is independent assortment?",
        options: [
            "Exchange of genetic material",
            "Random arrangement of homologous chromosome pairs during Metaphase I",
            "Separation of sister chromatids",
            "DNA replication"
        ],
        correct: 1,
        rationale: "Independent assortment is the random arrangement of homologous chromosome pairs during Metaphase I."
    },
    {
        id: 40,
        subject: "biology",
        question: "Which process contributes to genetic variation by exchanging genetic material between homologous chromosomes?",
        options: [
            "Independent assortment",
            "Crossing over",
            "DNA replication",
            "Cytokinesis"
        ],
        correct: 1,
        rationale: "Crossing over contributes to genetic variation by exchanging genetic material between homologous chromosomes."
    },

    // IX. Mitosis vs Meiosis (Questions 41-45)
    {
        id: 41,
        subject: "biology",
        question: "How many daughter cells are produced in mitosis?",
        options: [
            "One",
            "Two",
            "Four",
            "Eight"
        ],
        correct: 1,
        rationale: "Mitosis produces two daughter cells."
    },
    {
        id: 42,
        subject: "biology",
        question: "What separates during Meiosis I?",
        options: [
            "Sister chromatids",
            "Homologous chromosomes",
            "Centromeres",
            "Nuclear envelope"
        ],
        correct: 1,
        rationale: "Homologous chromosomes separate during Meiosis I."
    },
    {
        id: 43,
        subject: "biology",
        question: "Which process is used for cell growth and repair?",
        options: [
            "Meiosis",
            "Mitosis",
            "Both",
            "Neither"
        ],
        correct: 1,
        rationale: "Mitosis is used for cell growth and repair."
    },
    {
        id: 44,
        subject: "biology",
        question: "What separates during Mitosis and Meiosis II?",
        options: [
            "Homologous chromosomes",
            "Sister chromatids",
            "Nucleus",
            "Cytoplasm"
        ],
        correct: 1,
        rationale: "Sister chromatids separate during Mitosis and Meiosis II."
    },
    {
        id: 45,
        subject: "biology",
        question: "Which process produces genetically identical daughter cells?",
        options: [
            "Meiosis",
            "Mitosis",
            "Both",
            "Neither"
        ],
        correct: 1,
        rationale: "Mitosis produces genetically identical daughter cells."
    },

    // X. Cell Transport (Questions 46-50)
    {
        id: 46,
        subject: "biology",
        question: "What is selective permeability?",
        options: [
            "All substances can cross the membrane",
            "No substances can cross the membrane",
            "Membrane regulates which substances can cross",
            "Water only can cross"
        ],
        correct: 2,
        rationale: "Selective permeability means the membrane regulates which substances can cross."
    },
    {
        id: 47,
        subject: "biology",
        question: "Which type of transport does NOT require ATP?",
        options: [
            "Active transport",
            "Passive transport",
            "Both",
            "Neither"
        ],
        correct: 1,
        rationale: "Passive transport does not require ATP."
    },
    {
        id: 48,
        subject: "biology",
        question: "What is the general direction of passive transport?",
        options: [
            "Low to high concentration",
            "High to low concentration",
            "Both directions equally",
            "No specific direction"
        ],
        correct: 1,
        rationale: "Passive transport generally moves substances from high to low concentration."
    },
    {
        id: 49,
        subject: "biology",
        question: "Which type of transport can move substances against the concentration gradient?",
        options: [
            "Passive transport",
            "Active transport",
            "Both",
            "Neither"
        ],
        correct: 1,
        rationale: "Active transport can move substances against the concentration gradient using cellular energy."
    },
    {
        id: 50,
        subject: "biology",
        question: "What is cell transport?",
        options: [
            "Cell division",
            "Movement of substances into and out of cells",
            "Energy production",
            "DNA replication"
        ],
        correct: 1,
        rationale: "Cell transport is the movement of substances into and out of cells."
    },

    // XI. Types of Transport (Questions 51-55)
    {
        id: 51,
        subject: "biology",
        question: "A substance moves from high to low concentration without using ATP. What type of transport is this?",
        options: [
            "Active transport",
            "Simple diffusion",
            "Phagocytosis",
            "Exocytosis"
        ],
        correct: 1,
        rationale: "Simple diffusion moves substances from high to low concentration without ATP."
    },
    {
        id: 52,
        subject: "biology",
        question: "What is osmosis?",
        options: [
            "Movement of ions against gradient",
            "Movement of water across a selectively permeable membrane",
            "Engulfing large particles",
            "Release of substances from vesicles"
        ],
        correct: 1,
        rationale: "Osmosis is the movement of water across a selectively permeable membrane."
    },
    {
        id: 53,
        subject: "biology",
        question: "A cell engulfs a large bacterium. What process is this?",
        options: [
            "Exocytosis",
            "Phagocytosis",
            "Simple diffusion",
            "Facilitated diffusion"
        ],
        correct: 1,
        rationale: "Phagocytosis is when a cell engulfs a large particle."
    },
    {
        id: 54,
        subject: "biology",
        question: "Vesicles fuse with the plasma membrane to release substances outside the cell. What is this process called?",
        options: [
            "Phagocytosis",
            "Exocytosis",
            "Osmosis",
            "Active transport"
        ],
        correct: 1,
        rationale: "Exocytosis is when vesicles fuse with the plasma membrane and release substances outside the cell."
    },
    {
        id: 55,
        subject: "biology",
        question: "What moves substances such as ions against their concentration gradient?",
        options: [
            "Simple diffusion",
            "Protein pump",
            "Osmosis",
            "Facilitated diffusion"
        ],
        correct: 1,
        rationale: "Protein pumps move substances such as ions against their concentration gradient using cellular energy."
    },

    // XII. Tonicity (Questions 56-58)
    {
        id: 56,
        subject: "biology",
        question: "An animal cell is placed in a hypertonic solution. What happens to the cell?",
        options: [
            "Water moves in and the cell may burst",
            "Water moves out and the cell shrinks",
            "No water movement occurs",
            "The cell divides"
        ],
        correct: 1,
        rationale: "In hypertonic solution (higher solute outside), water moves out and animal cell shrinks."
    },
    {
        id: 57,
        subject: "biology",
        question: "What happens to a plant cell in a hypertonic solution?",
        options: [
            "It swells and becomes turgid",
            "Water leaves and plasmolysis occurs",
            "It bursts",
            "No change occurs"
        ],
        correct: 1,
        rationale: "Plant cell in hypertonic solution: water leaves → plasmolysis."
    },
    {
        id: 58,
        subject: "biology",
        question: "If the solute concentration is lower outside the cell, what type of solution is this and what happens?",
        options: [
            "Hypertonic, water moves out",
            "Hypotonic, water moves in",
            "Hypertonic, water moves in",
            "Hypotonic, water moves out"
        ],
        correct: 1,
        rationale: "Lower solute outside = hypotonic, water moves in (Hypo = water in)."
    },

    // XIII. Cell Requirements (Questions 59-60)
    {
        id: 59,
        subject: "biology",
        question: "What are the basic requirements of a cell?",
        options: [
            "Only water",
            "Energy, nutrients, and water",
            "Only energy",
            "Only nutrients"
        ],
        correct: 1,
        rationale: "Basic requirements of a cell are energy, nutrients, and water."
    },
    {
        id: 60,
        subject: "biology",
        question: "Why is waste removal important for cells?",
        options: [
            "To increase cell size",
            "To prevent waste accumulation from interfering with normal cellular functions",
            "To produce more energy",
            "To replicate DNA"
        ],
        correct: 1,
        rationale: "Waste removal prevents waste accumulation from interfering with normal cellular functions."
    },

    // Alternative questions for Biology
    {
        id: 101,
        subject: "biology",
        question: "A marine biologist studies how coral reefs interact with fish, algae, and water quality. Which branch of biology is this study primarily related to?",
        options: [
            "Genetics",
            "Ecology",
            "Histology",
            "Embryology"
        ],
        correct: 1,
        rationale: "Ecology studies interactions among organisms and their environment."
    },
    {
        id: 102,
        subject: "biology",
        question: "A genetic counselor helps a family understand how a genetic disorder might be passed to their children. This involves which branch of biology?",
        options: [
            "Physiology",
            "Genetics",
            "Morphology",
            "Biochemistry"
        ],
        correct: 1,
        rationale: "Genetics studies genes, heredity, and transmission of traits."
    },
    {
        id: 103,
        subject: "biology",
        question: "A cell has a nucleus but no membrane-bound organelles. Is this possible?",
        options: [
            "Yes, this is a prokaryotic cell",
            "No, eukaryotic cells have both nucleus and organelles",
            "Yes, this is a eukaryotic cell",
            "No, prokaryotic cells have no nucleus"
        ],
        correct: 1,
        rationale: "Eukaryotic cells have both a nucleus and membrane-bound organelles. A cell with nucleus but no organelles is not typical."
    },
    {
        id: 104,
        subject: "biology",
        question: "During which phase does the cell grow and prepare for division after DNA replication?",
        options: [
            "G₁ phase",
            "S phase",
            "G₂ phase",
            "M phase"
        ],
        correct: 2,
        rationale: "G₂ phase is for growth and preparation for cell division after DNA replication in S phase."
    },
    {
        id: 105,
        subject: "biology",
        question: "A cell in a hypotonic solution swells. Why does this happen?",
        options: [
            "Water moves out of the cell",
            "Water moves into the cell",
            "Solute moves into the cell",
            "Solute moves out of the cell"
        ],
        correct: 1,
        rationale: "In hypotonic solution, water moves into the cell causing it to swell."
    }
];

// Mabisang Komunikasyon Questions
const komunikasyonQuestions = [
    // I. Komunikasyon (Questions 1-5)
    {
        id: 1,
        subject: "komunikasyon",
        question: "Nag-uusap ang isang guro sa kanyang mga estudyante gamit ang wikang Filipino. Anong uri ng komunikasyon ang ginagamit niya?",
        options: [
            "Di-berbal na komunikasyon",
            "Berbal na komunikasyon",
            "Pasulat na komunikasyon",
            "Non-verbal na komunikasyon"
        ],
        correct: 1,
        rationale: "Berbal na komunikasyon ay gumagamit ng mga salitang sinasalita."
    },
    {
        id: 2,
        subject: "komunikasyon",
        question: "Isang estudyante ay nagpapahiwatig ng kanyang kalungkutan sa pamamagitan ng pag-iyak. Anong uri ng komunikasyon ang ipinapakita niya?",
        options: [
            "Pasalita na komunikasyon",
            "Ekspresyon ng mukha",
            "Pasulat na komunikasyon",
            "Berbal na komunikasyon"
        ],
        correct: 1,
        rationale: "Ekspresyon ng mukha ay nagpapakita ng damdamin tulad ng lungkot."
    },
    {
        id: 3,
        subject: "komunikasyon",
        question: "Nagpapadala ng mensahe ang isang tao sa pamamagitan ng paggamit ng senyas o hand signals. Anong uri ng komunikasyon ito?",
        options: [
            "Berbal na komunikasyon",
            "Di-berbal na komunikasyon",
            "Pasalita na komunikasyon",
            "Pasulat na komunikasyon"
        ],
        correct: 1,
        rationale: "Di-berbal na komunikasyon ay gumagamit ng senyas at simbolo."
    },
    {
        id: 4,
        subject: "komunikasyon",
        question: "Nag-aabot ng sulat ang isang tao sa kanyang kaibigan. Anong uri ng berbal na komunikasyon ang ginagamit niya?",
        options: [
            "Pasalita",
            "Pasulat",
            "Kilos",
            "Galaw ng mata"
        ],
        correct: 1,
        rationale: "Pasulat na komunikasyon ay gamit ng mga letra."
    },
    {
        id: 5,
        subject: "komunikasyon",
        question: "Nagbibigay ng pahiwatig ang isang tao sa pamamagitan ng pagtaas ng kilay habang nakikinig. Anong bahagi ng di-berbal na komunikasyon ang ginagamit niya?",
        options: [
            "Kilos",
            "Galaw ng mata",
            "Tinig",
            "Espasyo at distansya"
        ],
        correct: 1,
        rationale: "Galaw ng mata ay nagpapakita ng interes o atensyon."
    },

    // II. Wika at Kultura (Questions 6-12)
    {
        id: 6,
        subject: "komunikasyon",
        question: "Ang isang tao ay may sariling estilo sa paggamit ng wika na kakaiba sa iba. Anong uri ng wika ang tinutukoy nito?",
        options: [
            "Idiolect",
            "Ethnolect",
            "Dialect",
            "Sociolect"
        ],
        correct: 0,
        rationale: "Idiolect ay personal na paraan ng paggamit ng wika; kaugnay ng personal identity."
    },
    {
        id: 7,
        subject: "komunikasyon",
        question: "Ang mga Ilocano ay may sariling paraan ng pagsasalita na iba sa mga Tagalog. Anong uri ng wika ang ito?",
        options: [
            "Idiolect",
            "Ethnolect",
            "Dialect",
            "Sociolect"
        ],
        correct: 1,
        rationale: "Ethnolect ay partikular na gamit ng wika ng isang ethnic group."
    },
    {
        id: 8,
        subject: "komunikasyon",
        question: "Ang mga tao sa Batangas ay may ibang bigkas ng mga salita kumpara sa mga tao sa Manila. Anong tawag sa kanilang paraan ng pagsasalita?",
        options: [
            "Idiolect",
            "Ethnolect",
            "Dialect",
            "Sociolect"
        ],
        correct: 2,
        rationale: "Dialect ay paraan ng pagsasalita na ginagamit sa isang lugar."
    },
    {
        id: 9,
        subject: "komunikasyon",
        question: "Ang mga doktor ay may sariling terminolohiya o salita na ginagamit nila sa pag-uusap. Anong uri ng wika ang ito?",
        options: [
            "Idiolect",
            "Ethnolect",
            "Dialect",
            "Sociolect"
        ],
        correct: 3,
        rationale: "Sociolect ay paraan ng pagsasalita ng isang partikular na pangkat o society."
    },
    {
        id: 10,
        subject: "komunikasyon",
        question: "Isang tao ay nakakapagsalita ng Filipino at Ingles nang magkasabay. Anong tawag sa kanyang kakayahan?",
        options: [
            "First Language",
            "Bilingguwalismo",
            "Ethnolect",
            "Dialect"
        ],
        correct: 1,
        rationale: "Bilingguwalismo ay paggamit ng dalawa o higit pang wika."
    },
    {
        id: 11,
        subject: "komunikasyon",
        question: "Ang unang wika na natutunan ng isang bata mula sa kanyang mga magulang ay tinatawag na:",
        options: [
            "Second Language",
            "First Language",
            "Foreign Language",
            "Ethnolect"
        ],
        correct: 1,
        rationale: "First Language ay unang wika natutuhan o ginagamit ng isang tao."
    },
    {
        id: 12,
        subject: "komunikasyon",
        question: "Ang wika ay pangunahing instrumento sa pakikipag-ugnayan dahil:",
        options: [
            "Nagpapakita ito ng katalinuhan",
            "Nagbibigay ito ng paraan upang magkaunawaan ang mga tao",
            "Nagpapakita ito ng social status",
            "Nagbibigay ito ng trabaho"
        ],
        correct: 1,
        rationale: "Wika ay nagbibigay ng paraan upang magkaunawaan ang mga tao."
    },

    // III. Speaking Theory (Questions 13-20)
    {
        id: 13,
        subject: "komunikasyon",
        question: "Sa Speaking Theory ni Dell Hymes, ang lugar o pisikal na kapaligiran ng komunikasyon ay tinatawag na:",
        options: [
            "Participants",
            "Setting",
            "Ends",
            "Key"
        ],
        correct: 1,
        rationale: "Setting ay lugar o pisikal na kapaligiran ng komunikasyon."
    },
    {
        id: 14,
        subject: "komunikasyon",
        question: "Ang mga taong kasangkot sa komunikasyon ay tinatawag na:",
        options: [
            "Setting",
            "Participants",
            "Ends",
            "Act Sequence"
        ],
        correct: 1,
        rationale: "Participants ay mga taong kasangkot sa komunikasyon."
    },
    {
        id: 15,
        subject: "komunikasyon",
        question: "Ang layunin o dahilan ng komunikasyon ay tinatawag na:",
        options: [
            "Setting",
            "Participants",
            "Ends",
            "Key"
        ],
        correct: 2,
        rationale: "Ends ay layunin o dahilan ng komunikasyon."
    },
    {
        id: 16,
        subject: "komunikasyon",
        question: "Ang pagkakasunod-sunod ng mga pangyayari o pahayag sa komunikasyon ay tinatawag na:",
        options: [
            "Act Sequence",
            "Key",
            "Instrumentalities",
            "Norms"
        ],
        correct: 0,
        rationale: "Act Sequence ay pagkakasunod-sunod ng mga pangyayari o pahayag."
    },
    {
        id: 17,
        subject: "komunikasyon",
        question: "Ang tono, paraan, o espiritu ng mensahe ay tinatawag na:",
        options: [
            "Act Sequence",
            "Key",
            "Instrumentalities",
            "Norms"
        ],
        correct: 1,
        rationale: "Key ay tono, paraan, o espiritu ng mensahe."
    },
    {
        id: 18,
        subject: "komunikasyon",
        question: "Ang mga channel o paraan ng pagpapadala ng komunikasyon ay tinatawag na:",
        options: [
            "Key",
            "Instrumentalities",
            "Norms",
            "Genre"
        ],
        correct: 1,
        rationale: "Instrumentalities ay mga channel o paraan ng pagpapadala ng komunikasyon."
    },
    {
        id: 19,
        subject: "komunikasyon",
        question: "Ang mga patakaran o inaasahang asal ng komunikasyon ay tinatawag na:",
        options: [
            "Instrumentalities",
            "Norms",
            "Genre",
            "Setting"
        ],
        correct: 1,
        rationale: "Norms ay mga patakaran o inaasahang asal ng komunikasyon."
    },
    {
        id: 20,
        subject: "komunikasyon",
        question: "Ang kategorya o uri ng komunikasyon ay tinatawag na:",
        options: [
            "Norms",
            "Genre",
            "Setting",
            "Participants"
        ],
        correct: 1,
        rationale: "Genre ay kategorya o uri ng komunikasyon."
    },

    // IV. Interpersonal at Intrapersonal (Questions 21-25)
    {
        id: 21,
        subject: "komunikasyon",
        question: "Nag-iisip si Juan tungkol sa kanyang mga plano sa buhay. Anong uri ng komunikasyon ang ginagamit niya?",
        options: [
            "Interpersonal",
            "Intrapersonal",
            "Berbal",
            "Di-berbal"
        ],
        correct: 1,
        rationale: "Intrapersonal ay komunikasyon sa loob ng sarili o pag-iisip."
    },
    {
        id: 22,
        subject: "komunikasyon",
        question: "Nag-uusap si Maria sa kanyang kaibigan tungkol sa kanilang proyekto. Anong uri ng komunikasyon ang ito?",
        options: [
            "Intrapersonal",
            "Interpersonal",
            "Pasulat",
            "Di-berbal lamang"
        ],
        correct: 1,
        rationale: "Interpersonal ay pakikipag-usap o pakikipag-ugnayan sa ibang tao."
    },
    {
        id: 23,
        subject: "komunikasyon",
        question: "Ang pakikipag-usap sa sariling kaisipan ay tinatawag na:",
        options: [
            "Interpersonal",
            "Intrapersonal",
            "Berbal",
            "Di-berbal"
        ],
        correct: 1,
        rationale: "Intrapersonal ay pag-iisip o pakikipag-usap sa sariling kaisipan."
    },
    {
        id: 24,
        subject: "komunikasyon",
        question: "Ang pakikipag-ugnayan sa ibang tao ay tinatawag na:",
        options: [
            "Intrapersonal",
            "Interpersonal",
            "Pasulat",
            "Di-berbal"
        ],
        correct: 1,
        rationale: "Interpersonal ay pakikipag-usap o pakikipag-ugnayan sa ibang tao."
    },
    {
        id: 25,
        subject: "komunikasyon",
        question: "Maaring berbal o di-berbal ang interpersonal na komunikasyon. Tama o Mali?",
        options: [
            "Tama",
            "Mali",
            "Hindi sigurado",
            "Depende sa sitwasyon"
        ],
        correct: 0,
        rationale: "Tama, maaring berbal o di-berbal ang interpersonal na komunikasyon."
    },

    // V. Mabisang Pakikinig (Questions 26-32)
    {
        id: 26,
        subject: "komunikasyon",
        question: "Ang pagbibigay ng atensyon at pag-unawa sa mensahe ng kausap ay tinatawag na:",
        options: [
            "Pagsulat",
            "Pakikinig",
            "Pagbasa",
            "Pagsasalita"
        ],
        correct: 1,
        rationale: "Pakikinig ay pagbibigay ng atensyon at pag-unawa sa mensahe ng kausap."
    },
    {
        id: 27,
        subject: "komunikasyon",
        question: "Ang pagbibigay ng buong pansin sa kausap ay tinatawag na:",
        options: [
            "Reaksyon",
            "Atensyon",
            "Empatiya",
            "Pagtatanong"
        ],
        correct: 1,
        rationale: "Atensyon ay pagbibigay ng buong pansin."
    },
    {
        id: 28,
        subject: "komunikasyon",
        question: "Ang pagtugon sa mensahe ng kausap ay tinatawag na:",
        options: [
            "Atensyon",
            "Reaksyon at Feedback",
            "Empatiya",
            "Pagtatanong"
        ],
        correct: 1,
        rationale: "Reaksyon at Feedback ay pagtugon sa mensahe."
    },
    {
        id: 29,
        subject: "komunikasyon",
        question: "Ang pagtatanong upang mas malinaw na maunawaan ang mensahe ay tinatawag na:",
        options: [
            "Atensyon",
            "Reaksyon",
            "Pagtatanong",
            "Empatiya"
        ],
        correct: 2,
        rationale: "Pagtatanong ay pagtatanong upang mas malinaw na maunawaan."
    },
    {
        id: 30,
        subject: "komunikasyon",
        question: "Ang pag-unawa sa damdamin at pananaw ng nagsasalita ay tinatawag na:",
        options: [
            "Atensyon",
            "Reaksyon",
            "Pagtatanong",
            "Empatiya"
        ],
        correct: 3,
        rationale: "Empatiya ay pag-unawa sa damdamin at pananaw ng nagsasalita."
    },
    {
        id: 31,
        subject: "komunikasyon",
        question: "Naririnig lamang ang impormasyon ngunit maaaring walang aktibong tugon. Anong uri ng pakikinig ito?",
        options: [
            "Aktibong pakikinig",
            "Passive na pakikinig",
            "Empatikong pakikinig",
            "Kritikal na pakikinig"
        ],
        correct: 1,
        rationale: "Passive na pakikinig ay naririnig lamang ang impormasyon ngunit maaaring walang aktibong tugon."
    },
    {
        id: 32,
        subject: "komunikasyon",
        question: "Nakikinig nang mabuti at may reaksyon/tugon sa kausap. Anong uri ng pakikinig ito?",
        options: [
            "Passive na pakikinig",
            "Aktibong pakikinig",
            "Di-berbal na pakikinig",
            "Berbal na pakikinig"
        ],
        correct: 1,
        rationale: "Aktibong pakikinig ay nakikinig nang mabuti at may reaksyon/tugon."
    },

    // VI. Empatiya (Questions 33-39)
    {
        id: 33,
        subject: "komunikasyon",
        question: "Ang kakayahang maunawaan at maramdaman ang nararamdaman ng iba ay tinatawag na:",
        options: [
            "Empatiya",
            "Simpatiya",
            "Ampatya",
            "Kapatiran"
        ],
        correct: 0,
        rationale: "Empatiya ay kakayahang maunawaan at maramdaman ang nararamdaman ng iba."
    },
    {
        id: 34,
        subject: "komunikasyon",
        question: "Nakakatulong ang empatiya sa mas magandang pakikipag-ugnayan dahil:",
        options: [
            "Nagpapakita ito ng lakas",
            "Mas nauunawaan ang sitwasyon at damdamin ng iba",
            "Nagbibigay ito ng pera",
            "Nagpapakita ito ng power"
        ],
        correct: 1,
        rationale: "Empatiya ay nakakatulong sa mas magandang pakikipag-ugnayan dahil mas nauunawaan ang sitwasyon at damdamin ng iba."
    },
    {
        id: 35,
        subject: "komunikasyon",
        question: "Ang pag-unawa sa damdamin ng iba ay nakakatulong sa:",
        options: [
            "Pagkakaroon ng away",
            "Pagbuo ng magandang relasyon",
            "Pagkakaroon ng problema",
            "Pagkakaroon ng galit"
        ],
        correct: 1,
        rationale: "Empatiya ay nakakatulong sa pagbuo ng magandang relasyon."
    },
    {
        id: 36,
        subject: "komunikasyon",
        question: "Ang empatiya ay nakakaiwas sa:",
        options: [
            "Pagkakaibigan",
            "Pagkakaroon ng trabaho",
            "Pagkakaroon ng pera",
            "Hindi pagkakaunawaan"
        ],
        correct: 3,
        rationale: "Empatiya ay nakakaiwas sa hindi pagkakaunawaan."
    },
    {
        id: 37,
        subject: "komunikasyon",
        question: "Sa 6 na Pamantayan ng Empatiya, ang marunong mag-adjust depende sa sitwasyon ay tinatawag na:",
        options: [
            "Adaptability",
            "Conversational Involvement",
            "Conversational Management",
            "Empathy"
        ],
        correct: 0,
        rationale: "Adaptability ay marunong mag-adjust depende sa sitwasyon."
    },
    {
        id: 38,
        subject: "komunikasyon",
        question: "Ang aktibong nakikilahok sa usapan ay tinatawag na:",
        options: [
            "Adaptability",
            "Conversational Involvement",
            "Conversational Management",
            "Effectiveness"
        ],
        correct: 1,
        rationale: "Conversational Involvement ay aktibong nakikilahok sa usapan."
    },
    {
        id: 39,
        subject: "komunikasyon",
        question: "Ang maayos na pamamahala sa daloy ng pag-uusap ay tinatawag na:",
        options: [
            "Conversational Involvement",
            "Conversational Management",
            "Empathy",
            "Effectiveness"
        ],
        correct: 1,
        rationale: "Conversational Management ay maayos na pamamahala sa daloy ng pag-uusap."
    },

    // VII. 6 na Pamantayan (Questions 40-45)
    {
        id: 40,
        subject: "komunikasyon",
        question: "Ang sikolohikal na kakayahang maunawaan ang damdamin ng iba ay tinatawag na:",
        options: [
            "Adaptability",
            "Conversational Involvement",
            "Conversational Management",
            "Empathy"
        ],
        correct: 3,
        rationale: "Empathy ay sikolohikal na kakayahang maunawaan ang damdamin ng iba."
    },
    {
        id: 41,
        subject: "komunikasyon",
        question: "Ang mahusay na paggamit ng komunikasyon upang makamit ang layunin ay tinatawag na:",
        options: [
            "Empathy",
            "Effectiveness",
            "Appropriateness",
            "Adaptability"
        ],
        correct: 1,
        rationale: "Effectiveness ay mahusay na paggamit ng komunikasyon upang makamit ang layunin."
    },
    {
        id: 42,
        subject: "komunikasyon",
        question: "Ang angkop na komunikasyon sa sitwasyon, lugar, kausap, at paksa ay tinatawag na:",
        options: [
            "Effectiveness",
            "Appropriateness",
            "Empathy",
            "Adaptability"
        ],
        correct: 1,
        rationale: "Appropriateness ay angkop ang komunikasyon sa sitwasyon, lugar, kausap, at paksa."
    },
    {
        id: 43,
        subject: "komunikasyon",
        question: "Sitwasyon: Nasa formal na interview ka para sa trabaho. Dapat kang mag-adjust sa iyong paraan ng pagsasalita. Anong pamantayan ang itinuturo nito?",
        options: [
            "Appropriateness",
            "Adaptability",
            "Effectiveness",
            "Empathy"
        ],
        correct: 1,
        rationale: "Adaptability ay marunong mag-adjust depende sa sitwasyon, pormal man o di-pormal."
    },
    {
        id: 44,
        subject: "komunikasyon",
        question: "Sitwasyon: Nakikipag-usap ka sa isang bata tungkol sa laro. Dapat mong gamitin ang mga simpleng salita. Anong pamantayan ang itinuturo nito?",
        options: [
            "Effectiveness",
            "Appropriateness",
            "Empathy",
            "Conversational Management"
        ],
        correct: 1,
        rationale: "Appropriateness ay angkop ang komunikasyon sa sitwasyon, lugar, kausap, at paksa."
    },
    {
        id: 45,
        subject: "komunikasyon",
        question: "Sitwasyon: Nakikinig ka sa kwento ng kaibigan tungkol sa kanyang problema. Naiintindihan mo ang kanyang nararamdaman. Anong pamantayan ang itinuturo nito?",
        options: [
            "Conversational Involvement",
            "Empathy",
            "Effectiveness",
            "Adaptability"
        ],
        correct: 1,
        rationale: "Empathy ay sikolohikal na kakayahang maunawaan ang damdamin ng iba."
    },

    // VIII. Pagsulat ng Dyornal (Questions 46-52)
    {
        id: 46,
        subject: "komunikasyon",
        question: "Ang isang sulat o tala kung saan itinatala ang mga karanasan, damdamin, at pagninilay ay tinatawag na:",
        options: [
            "Talaarawan",
            "Dyornal",
            "Memo",
            "Letter"
        ],
        correct: 1,
        rationale: "Dyornal ay isang sulat o tala kung saan itinatala ang mga karanasan, damdamin, at pagninilay."
    },
    {
        id: 47,
        subject: "komunikasyon",
        question: "Ang pagninilay tungkol sa mga karanasan, aral, at damdamin sa buhay ay uri ng:",
        options: [
            "Travel Journal",
            "Personal na Journal",
            "Repleksyon Journal",
            "Work Journal"
        ],
        correct: 2,
        rationale: "Repleksyon Journal ay pagninilay tungkol sa mga karanasan, aral, at damdamin sa buhay."
    },
    {
        id: 48,
        subject: "komunikasyon",
        question: "Ang talaan ng mga karanasan, lugar, at taong nakilala sa paglalakbay ay uri ng:",
        options: [
            "Repleksyon Journal",
            "Travel Journal",
            "Personal na Journal",
            "Dream Journal"
        ],
        correct: 1,
        rationale: "Travel Journal ay talaan ng mga karanasan, lugar, at taong nakilala sa paglalakbay."
    },
    {
        id: 49,
        subject: "komunikasyon",
        question: "Ang personal na tala ng iniisip, nararamdaman, pangarap, at pang-araw-araw na karanasan ay uri ng:",
        options: [
            "Travel Journal",
            "Repleksyon Journal",
            "Personal na Journal",
            "Food Journal"
        ],
        correct: 2,
        rationale: "Personal na Journal ay personal na tala ng iniisip, nararamdaman, pangarap, at pang-araw-araw na karanasan."
    },
    {
        id: 50,
        subject: "komunikasyon",
        question: "Nakatuon sa mga natutunan mula sa karanasan ang:",
        options: [
            "Travel Journal",
            "Personal na Journal",
            "Repleksyon Journal",
            "Work Journal"
        ],
        correct: 2,
        rationale: "Repleksyon Journal ay nakatuon sa mga natutunan mula sa karanasan."
    },
    {
        id: 51,
        subject: "komunikasyon",
        question: "Maaaring maglaman ng larawan, mapa, tiket, obserbasyon, at alaala ang:",
        options: [
            "Repleksyon Journal",
            "Personal na Journal",
            "Travel Journal",
            "Dream Journal"
        ],
        correct: 2,
        rationale: "Travel Journal ay maaaring maglaman ng larawan, mapa, tiket, obserbasyon, at alaala."
    },
    {
        id: 52,
        subject: "komunikasyon",
        question: "Para sa sarili at maaaring magsilbing lugar ng pagpapahayag ang:",
        options: [
            "Travel Journal",
            "Repleksyon Journal",
            "Personal na Journal",
            "Work Journal"
        ],
        correct: 2,
        rationale: "Personal na Journal ay para sa sarili at maaaring magsilbing lugar ng pagpapahayag."
    },

    // IX. Additional Situational Questions (Questions 53-60)
    {
        id: 53,
        subject: "komunikasyon",
        question: "Sitwasyon: Nasa simbahan ka at ang pari ay nagsisimulang magsalita. Dapat kang maging tahimik at makinig. Anong pamantayan ang dapat mong sundin?",
        options: [
            "Appropriateness",
            "Adaptability",
            "Effectiveness",
            "Conversational Involvement"
        ],
        correct: 0,
        rationale: "Appropriateness ay angkop ang komunikasyon sa sitwasyon, lugar, kausap, at paksa."
    },
    {
        id: 54,
        subject: "komunikasyon",
        question: "Sitwasyon: Nakikipag-usap ka sa iyong lolo na may sakit. Dapat mong gamitin ang malambing na tono. Anong pamantayan ang itinuturo nito?",
        options: [
            "Appropriateness",
            "Effectiveness",
            "Empathy",
            "Adaptability"
        ],
        correct: 2,
        rationale: "Empathy ay sikolohikal na kakayahang maunawaan ang damdamin ng iba."
    },
    {
        id: 55,
        subject: "komunikasyon",
        question: "Sitwasyon: Nasa debate ka at kailangan mong ipahayag ang iyong punto nang malinaw. Dapat mong gamitin ang tamang salita. Anong pamantayan ang itinuturo nito?",
        options: [
            "Effectiveness",
            "Appropriateness",
            "Empathy",
            "Conversational Management"
        ],
        correct: 0,
        rationale: "Effectiveness ay mahusay na paggamit ng komunikasyon upang makamit ang layunin."
    },
    {
        id: 56,
        subject: "komunikasyon",
        question: "Sitwasyon: Nakikipag-usap ka sa isang banyagang turista. Dapat mong mag-adjust sa iyong paraan ng pagsasalita. Anong pamantayan ang itinuturo nito?",
        options: [
            "Adaptability",
            "Effectiveness",
            "Empathy",
            "Conversational Involvement"
        ],
        correct: 0,
        rationale: "Adaptability ay marunong mag-adjust depende sa sitwasyon."
    },
    {
        id: 57,
        subject: "komunikasyon",
        question: "Sitwasyon: Ikaw ang moderator ng isang group discussion. Dapat mong maayos na pamahalaan ang daloy ng usapan. Anong pamantayan ang itinuturo nito?",
        options: [
            "Conversational Involvement",
            "Conversational Management",
            "Empathy",
            "Effectiveness"
        ],
        correct: 1,
        rationale: "Conversational Management ay maayos na pamamahala sa daloy ng pag-uusap."
    },
    {
        id: 58,
        subject: "komunikasyon",
        question: "Sitwasyon: Nakikinig ka sa kwento ng iyong kaibigan tungkol sa kanyang tagumpay. Aktibong kang nakikilahok sa usapan. Anong pamantayan ang itinuturo nito?",
        options: [
            "Conversational Management",
            "Conversational Involvement",
            "Empathy",
            "Appropriateness"
        ],
        correct: 1,
        rationale: "Conversational Involvement ay aktibong nakikilahok sa usapan."
    },
    {
        id: 59,
        subject: "komunikasyon",
        question: "Sitwasyon: Nagsusulat ka ng dyornal tungkol sa iyong unang paglalakbay sa probinsya. Anong uri ng dyornal ang dapat mong gamitin?",
        options: [
            "Repleksyon Journal",
            "Travel Journal",
            "Personal na Journal",
            "Dream Journal"
        ],
        correct: 1,
        rationale: "Travel Journal ay talaan ng mga karanasan, lugar, at taong nakilala sa paglalakbay."
    },
    {
        id: 60,
        subject: "komunikasyon",
        question: "Sitwasyon: Nagsusulat ka ng dyornal tungkol sa mga aral na natutunan mo sa iyong pagkakamali. Anong uri ng dyornal ang dapat mong gamitin?",
        options: [
            "Travel Journal",
            "Personal na Journal",
            "Repleksyon Journal",
            "Food Journal"
        ],
        correct: 2,
        rationale: "Repleksyon Journal ay pagninilay tungkol sa mga karanasan, aral, at damdamin sa buhay."
    },

    // Alternative questions for Mabisang Komunikasyon
    {
        id: 101,
        subject: "komunikasyon",
        question: "Sitwasyon: Nasa classroom ka at ang guro ay nagtuturo. Dapat kang makinig at magtanong kung may hindi ka maintindihan. Anong uri ng pakikinig ang dapat mong gawin?",
        options: [
            "Passive na pakikinig",
            "Aktibong pakikinig",
            "Di-berbal na pakikinig",
            "Berbal na pakikinig"
        ],
        correct: 1,
        rationale: "Aktibong pakikinig ay nakikinig nang mabuti at may reaksyon/tugon."
    },
    {
        id: 102,
        subject: "komunikasyon",
        question: "Sitwasyon: Nakikipag-usap ka sa iyong boss tungkol sa iyong promotion. Dapat mong gamitin ang pormal na wika. Anong pamantayan ang itinuturo nito?",
        options: [
            "Appropriateness",
            "Adaptability",
            "Effectiveness",
            "Empathy"
        ],
        correct: 0,
        rationale: "Appropriateness ay angkop ang komunikasyon sa sitwasyon, lugar, kausap, at paksa."
    },
    {
        id: 103,
        subject: "komunikasyon",
        question: "Ang mga Cebuano ay may sariling paraan ng pagsasalita na iba sa mga Tagalog. Anong uri ng wika ang ito?",
        options: [
            "Idiolect",
            "Ethnolect",
            "Dialect",
            "Sociolect"
        ],
        correct: 1,
        rationale: "Ethnolect ay partikular na gamit ng wika ng isang ethnic group."
    },
    {
        id: 104,
        subject: "komunikasyon",
        question: "Sitwasyon: Nakikipag-usap ka sa isang biktima ng bagyo. Dapat mong ipakita na naiintindihan mo ang kanyang sitwasyon. Anong pamantayan ang itinuturo nito?",
        options: [
            "Conversational Involvement",
            "Empathy",
            "Effectiveness",
            "Adaptability"
        ],
        correct: 1,
        rationale: "Empathy ay sikolohikal na kakayahang maunawaan ang damdamin ng iba."
    },
    {
        id: 105,
        subject: "komunikasyon",
        question: "Ang paggamit ng tatlong wika (Filipino, English, at Mandarin) ay tinatawag na:",
        options: [
            "Bilingguwalismo",
            "Multilingguwalismo",
            "Ethnolect",
            "Dialect"
        ],
        correct: 1,
        rationale: "Multilingguwalismo ay paggamit ng dalawa o higit pang wika."
    }
];

// Combine all questions
const allQuestions = [
    ...scienceQuestions.map(q => ({...q, subject: "science"})),
    ...mathQuestions,
    ...biologyQuestions,
    ...komunikasyonQuestions
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
        questions = selectRandomQuestions(currentSubject); // Re-randomize questions
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        renderQuestion();
        updateStats();
    });

    // Subject selection
    scienceBtn.addEventListener('click', () => {
        if (currentSubject === "science") return;
        currentSubject = "science";
        currentQuestionIndex = 0;
        userAnswers = {};
        reviewAnswers = {};
        wrongQuestions = [];
        reviewIndex = 0;
        isReviewMode = false;
        questions = selectRandomQuestions(currentSubject);
        scienceBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        mathBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        biologyBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        komunikasyonBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        renderQuestion();
        updateStats();
    });

    mathBtn.addEventListener('click', () => {
        if (currentSubject === "math") return;
        currentSubject = "math";
        currentQuestionIndex = 0;
        userAnswers = {};
        reviewAnswers = {};
        wrongQuestions = [];
        reviewIndex = 0;
        isReviewMode = false;
        questions = selectRandomQuestions(currentSubject);
        mathBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        scienceBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        biologyBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        komunikasyonBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        renderQuestion();
        updateStats();
    });

    biologyBtn.addEventListener('click', () => {
        if (currentSubject === "biology") return;
        currentSubject = "biology";
        currentQuestionIndex = 0;
        userAnswers = {};
        reviewAnswers = {};
        wrongQuestions = [];
        reviewIndex = 0;
        isReviewMode = false;
        questions = selectRandomQuestions(currentSubject);
        biologyBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        scienceBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        mathBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        komunikasyonBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        practiceModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        reviewModeBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        renderQuestion();
        updateStats();
    });

    komunikasyonBtn.addEventListener('click', () => {
        if (currentSubject === "komunikasyon") return;
        currentSubject = "komunikasyon";
        currentQuestionIndex = 0;
        userAnswers = {};
        reviewAnswers = {};
        wrongQuestions = [];
        reviewIndex = 0;
        isReviewMode = false;
        questions = selectRandomQuestions(currentSubject);
        komunikasyonBtn.className = 'px-6 py-3 rounded-xl font-semibold transition gradient-bg text-white';
        scienceBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        mathBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
        biologyBtn.className = 'px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-700 hover:bg-gray-300';
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
