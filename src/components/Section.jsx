export default function Section({title, children, ...props}){
    return (
        <section {...props}>
          <h2>Examples</h2>
          {children}
        </section>
    )
}