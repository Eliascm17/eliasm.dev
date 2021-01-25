import { createIcon } from '@chakra-ui/icons';

export const X = createIcon({
    displayName: 'x',
    path: (
        <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M15 9l-6 6M9 9l6 6" />
        </g>
    )
});
