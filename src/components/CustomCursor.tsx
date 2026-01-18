import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const updateDotPosition = (e: MouseEvent) => {
            // Smooth follow for the center dot with delay
            setTimeout(() => {
                setDotPosition({ x: e.clientX, y: e.clientY });
            }, 50);
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mousemove', updateDotPosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mousemove', updateDotPosition);
        };
    }, []);

    return (
        <>
            <div
                className="custom-cursor"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
            <div
                className="custom-cursor-dot"
                style={{
                    left: `${dotPosition.x}px`,
                    top: `${dotPosition.y}px`,
                }}
            />
        </>
    );
};

export default CustomCursor;
