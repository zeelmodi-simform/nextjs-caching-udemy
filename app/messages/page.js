import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';

// export const revalidate = 5;
// export const dynamic = 'force-dynamic';


export default async function MessagesPage() {
  // const response = await fetch('http://localhost:8080/messages', {
  //   // headers: {
  //   //   'X-ID': 'page',
  //   // },
  //   // cache: 'force-cache'
  //   // next: {
  //   //   revalidate: 5
  //   // }
  //   next: {
  //     tags: ['msg']
  //   }
  // });
  // const messages = await response.json();

  const messages = await getMessages()

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
