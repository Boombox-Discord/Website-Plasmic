// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicTableCommands,
  DefaultTableCommandsProps
} from "./plasmic/boombox/PlasmicTableCommands";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css"

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface TableCommandsProps extends Omit<DefaultTableCommandsProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultTableCommandsProps altogether and have
// total control over the props for your component.
interface TableCommandsProps extends DefaultTableCommandsProps {}

function TableCommands_(
  props: TableCommandsProps,
  ref: HTMLElementRefOf<"div">
) {
  const wrapper = React.useRef(null)

  React.useEffect(() => {
    const grid = new Grid({
      columns: ['Name', 'Usage', 'Description'],
      search: true,
      data: [
        ['Play', '/play [song name, youtube or spotify link]', 'This will find the song from youtube or spotify and start playing. If there is something currently playing it will add it to the queue.'],
        ['Skip', '/skip', 'Will skip the currently playing song.'],
        ['Stop', '/stop', 'Will stop the current song and delete the queue.'],
        ['Now Playing', '/np', 'Displays what song is currently playing.'],
        ['Queue', '/queue', 'Displays all the songs in the queue.'],
        ['Volume', '/volume [volume]', 'Sets the volume. Use a number between 1 and 100.'],
        ['Invite', '/invite', 'Sends an invite link for the bot.'],
        ['Playlist', '/playlist [youtube playlist url, spotify album or playlist]', 'This command will add all the songs from a youtube playlist, spotify album or playlist into the queue.'],
        ['Pause', '/pause', 'Will pause the song that is currently playing.'],
        ['Remove', '/remove [position in queue]', 'Will remove that song from the queue.'],
        ['Save Queue', '/savequeue save [name]', 'Saves the current queue with the specified name.'],
        ['List Saved Queue', '/savequeue list', 'Shows all queues saved for your user.'],
        ['Load Saved Queue', '/savequeue load [name]', 'Loads the saved queue into the current queue'],
        ['Delete Saved Queue', '/savequeue delete [name]', 'Deletes the saved queue.']
      ],
      style: {
        container: {
          'max-width': '1000px',
        }
      },
      language: {
        'search': {
          'placeholder': 'Search For Commands...'
        }
      }
    }).render(wrapper.current)
  })

  return (
    <div ref={wrapper} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '50px'
    }} />
  );
}

const TableCommands = React.forwardRef(TableCommands_);
export default TableCommands;
