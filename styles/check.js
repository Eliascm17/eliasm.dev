import { createIcon } from '@chakra-ui/icons';

export const Check = createIcon({
    displayName: 'check',
    path: (
        <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
        </g>
    )
});