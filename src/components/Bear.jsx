import { useRive, useStateMachineInput } from "rive-react";

const Bear = () => {
    const STATE_MACHINE_NAME = "BearStateMachine";
    const INPUT_NAME = "Point";

    const { rive, RiveComponent } = useRive({
        src: "/assets/bear.riv",
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true, 
    });

    const pointInput = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME);

    const handleButtonClick = () => {
        if (pointInput) {
            pointInput.fire();
        }
    };

    return (
        <div>
            <RiveComponent style={{ width: "300px", height: "300px" }} />
            <div id="button-container">
                <button onClick={handleButtonClick}>Click Me!</button>
            </div>
        </div>
    );
};

export default Bear;
