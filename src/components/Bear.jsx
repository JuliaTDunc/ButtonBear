import { useRive } from "@rive-app/react";

const Bear = () => {

    const handleMove = () => {
        if (rive) {
            rive.play("Walk"); // Trigger walk animation
        }
    };

    const handleStop = () => {
        if (rive) {
            rive.play("Idle"); // Back to idle when stopping
        }
    };

    const { rive, RiveComponent } = useRive({
        src: "/assets/bear.riv", // Make sure your .riv file is in /src/assets or public/assets
        stateMachines: "BearState", // Match the state machine name in Rive
        autoplay: true,
    });

    return <RiveComponent style={{ width: "200px", height: "200px" }} />;
};

export default Bear;
