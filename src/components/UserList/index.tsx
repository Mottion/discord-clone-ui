import React from "react"

import {Container, Role, User, Avatar } from "./styles"

interface Userprops{
  nickname: string;
  isBot?: boolean;
}


const UserRow: React.FC<Userprops> = ({nickname, isBot}) => {
  return(
    <User>
      <Avatar className={isBot? 'bot' : ''}/>
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}


const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>

      <UserRow nickname="Most"/>

      <Role>Offline - 1</Role>
      <UserRow nickname="Diego Fernandes" isBot/>
      <UserRow nickname="CK"/>
      <UserRow nickname="Fontanela"/>
      <UserRow nickname="JBL" isBot/>
      <UserRow nickname=".Oli."/>
      <UserRow nickname="Abigail (Käli)"/>
      <UserRow nickname="Aku M."/>
      <UserRow nickname="Amante das batatas"/>
      <UserRow nickname="devils den"/>
      <UserRow nickname="douglas magrinho"/>
      <UserRow nickname="Feliz"/>
      <UserRow nickname="Folk"/>
      <UserRow nickname="Fonta"/>
      <UserRow nickname="Guii"/>
      <UserRow nickname="TigerHikari"/>
      <UserRow nickname="zurui"/>

    </Container>
  )
}

export default UserList;