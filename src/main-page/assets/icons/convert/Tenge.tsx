export const Tenge = ({ cn, click }: { cn?: string; click?: () => void }) => (
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
            d='M6 6H18M6 9H12M18 9H12M12 9V20'
            stroke='#303030'
            stroke-width='2.2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
)
