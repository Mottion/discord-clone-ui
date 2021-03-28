import React, {useRef, useEffect} from "react"

import { Container,Messages, InputWrapper, Input, InputIcon} from "./styles"
import ChannelMessage, {Mention} from "../ChannelMessage"


const ServerName: React.FC = () => {
  const content = []
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(()=> {
    const div = messagesRef.current;
    if(div){
      div.scrollTop = div.scrollHeight;
    }
  }, [])

  for(var i = 0; i < 15; i++){
    content.push(<ChannelMessage 
      author="adrian elizandro"
      date="28/03/2021"
      content="gameplay de lolzinho as 15 pra treina pro clash"
    />)
  }

  return (
    <Container>
      <Messages ref={messagesRef}>
        {content}

        <ChannelMessage 
          author="Diego Fernandes"
          date="28/03/2021"
          content={
            <>
              <Mention>@adrian elizandro</Mention> é o hypercarry do time, apenas repeita.
            </>
          }
          isBot
          hasMention
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ServerName;