import { CORE_CONCEPTS, EXAMPLES } from '../data'
import CoreConcept from './CoreConcept'

export default function CoreConcepts(){
    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(conceptItem => (
              <CoreConcept key={conceptItem.title}
              title={conceptItem.title} 
              description={conceptItem.description} 
              image={conceptItem.image}
            />
            ))}
          </ul>
        </section>
    )
}