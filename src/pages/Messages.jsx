import React from 'react'
import Container from '../components/Container'

const Messages = () => {
  return (
    <div className="pr-1">
      <Container>
        <div className="w-full min-h-[calc(100vh-80px)] border border-gray-200 rounded-lg shadow-md px-5 py-3 flex flex-col">
          <div className=" text-center text-[20px] pt-5 opacity-90">
            You don’t have any messages
          </div>
          <div className=" text-center text-[14px] opacity-65">
            When you receive a new message, it will appear here.
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Messages
