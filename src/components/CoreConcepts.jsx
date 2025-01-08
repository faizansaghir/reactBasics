import { CORE_CONCEPTS, EXAMPLES } from '../data'
import CoreConcept from './CoreConcept'
import Section from './Section'

export default function CoreConcepts(){
    return (
        <Section title='Core Concepts' id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map(conceptItem => (
              <CoreConcept key={conceptItem.title}
              title={conceptItem.title} 
              description={conceptItem.description} 
              image={conceptItem.image}
            />
            ))}
          </ul>
        </Section>
    )
}