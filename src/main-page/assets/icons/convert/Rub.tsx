export const Rub = ({ cn, click }: { cn?: string; click?: () => void }) => (
    <svg
        className={cn}
        onClick={click}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M9 20.0002V12M9 12C14 12 17 12 17 8C17 4 14 4 9 4V12ZM7 16H15'
            stroke='#303030'
            stroke-width='2.2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
)
