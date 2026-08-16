import { AboutHeader } from "../components/AboutHeader"
import { Footer } from "../components/Footer"
import Header from "../components/Header"

export default function About() {
  return (
    <main className="w-full h-full">
      <AboutHeader />
      <div className="w-full h-full bg-black ">
        <p className="text-white text-lg p-4">Villiam was born, as far as anyone can tell, sometime between a rainstorm and a jazz record skipping on a turntable in Södermalm, Stockholm — a fact that would explain both his perfect pitch and his tendency to speak in slightly ominous metaphors. He currently resides in a fourth-floor walk-up apartment that technically has room for one bookshelf but currently houses eleven, arranged not by author or genre but by what he calls "emotional weather."<br/>
          Villiam can identify any note played on any instrument, in any key, by anyone, including his neighbor's poorly-tuned accordion, which he insists is "objectively suffering in F-sharp minor." He has never once used this power for anything practical. Instead, he uses it mostly to wince audibly at the tram doors, which chime a full quarter-tone flat, and to win arguments at parties by humming the correct pitch of someone's ringtone before they've even picked up the phone.<br/>
          His two great literary loves exist in a permanent, unresolved tension. On one hand, there is The Lord of the Rings, which he has read enough times that he now dreams in Elvish subtitles and has strong, unsolicited opinions about the pacing of the Council of Elrond. On the other, there is Stephen King's The Shining, which he insists is "basically a very stressful bedtime story," and which has permanently ruined hedge mazes, hotel hallways, and the number 237 for him. Ask him which book he'd bring to a desert island and he will stare into the middle distance for an uncomfortably long time before changing the subject.<br/>
          Villiam believes that Middle-earth and the Overlook Hotel exist on the same metaphysical plane — somewhere just behind Södermalm, past the ICA supermarket and down a staircase that definitely wasn't there yesterday. He has, on more than one occasion, tried to explain this theory to strangers at Kvarnen using only hand gestures and the wrong key of humming.<br/>
          When he isn't reading, rereading, or reorganizing his shelves by emotional weather, Villiam can be found walking very slowly through Södermalm's cobblestone streets, silently correcting the pitch of passing car horns, utterly convinced that somewhere out there, a wizard and a very unfriendly hotel are both, in their own way, waiting for him to finish the last chapter.
        </p>
      </div>
      <Footer />
    </main>
  )
}