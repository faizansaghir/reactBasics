export default function Tabs({children, buttons, ButtonContainer}) {
    return (
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    )
}