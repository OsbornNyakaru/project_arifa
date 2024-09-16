"use client";

{/* Client Component 
  "use client";
    Purpose: This directive indicates that the file is a client component in Next.js. This is important because, by default, 
    Next.js components are server-side, but if you need features like hooks (useState, useEffect, etc.), 
    which are only available on the client-side, you need to specify this. 
    This directive is only relevant in Next.js 13 or later with the App Router.
 */}

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from "@/components/Form";
import toast from 'react-hot-toast';

  {/* Import Statements
    Purpose: These import statements bring in various functionalities and components that the CreatePrompt 
    component will use:
      useState: A React hook that allows you to add state to functional components.
      useSession: A hook from next-auth that provides session data, including information about the authenticated user.
      useRouter: A hook from Next.js that provides access to the router, allowing navigation between different pages.
      Form: A custom component that likely handles the UI for creating and submitting the form.
*/}

const CreatePrompt = () => {
      {/*
        *** const CreatePrompt = () => { ***
          Purpose: This line defines a functional component named CreatePrompt. 
          It’s a standard way of defining components in React.
    */}
    const router = useRouter();
    const { data: session } = useSession();
    {/* Router and Session Hooks
        *** const router = useRouter();
            const { data: session } = useSession(); ***
              Purpose:
              useRouter(): Initializes the router, allowing you to navigate programmatically within the application.
              useSession(): Retrieves session data. The data object, renamed to session, contains information about the current user, 
              such as their ID, name, email, etc. If the user is not authenticated, session will be null. 
    */}

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

      {/*State Initialization
        Purpose:
          => submitting: A boolean state that tracks whether the form is currently being submitted. It’s initialized to false.
          => post: An object state that holds the form data, specifically the prompt and tag fields, 
            which are initially empty strings.
    */}

    const createPrompt = async (e) => {
      e.preventDefault();
      setSubmitting(true);

      try {
        const response = await fetch('/api/prompt/new', 
        {
          method: 'POST',
          body: JSON.stringify({
            prompt: post.prompt,
            userId: session?.user.id,
            tag: post.tag
          })
        })

        if (response.ok) { 
          router.push('/');
          router.refresh();
          toast.success("Prompt created successfully");
        }
        router.refresh();
      } catch (error) {
          toast.error("An error occurred while creating a prompt", error);
      } finally {
        setSubmitting(false);
      }
    }

      {/*Function: createPrompt
        Purpose:
          Function Declaration: createPrompt is an asynchronous function that handles the form submission.

          e.preventDefault(): Prevents the default form submission behavior (which would reload the page).

          setSubmitting(true): Sets the submitting state to true, indicating that the form is in the process
          of being submitted.

          fetch API Call: Sends a POST request to the server endpoint /api/prompt/new, which is likely an API route in Next.js.
           The request body contains the prompt, the userId from the session, and the tag, all serialized as a JSON string.

          Handling Response: If the server responds with a status indicating success (response.ok), the user is redirected 
          to the home page using router.push('/').

          Error Handling: If an error occurs during the fetch operation, it is caught and logged to the console.

          finally: Whether the request succeeds or fails, setSubmitting(false) is called to reset the submitting state, 
          allowing the form to be used again. 
    */}


  return (
    <Form 
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
    />
  )
}

  {/* Returning the form component:
    Purpose: This is the component’s render method. It returns a Form component, passing several props to it:
      type="Create": Specifies that this form is for creating a new prompt. The Form component might use this to 
      display different text or styles based on the form type.

      post={post}: Passes the post state, containing the current form data (prompt and tag).

      setPost={setPost}: Passes the setPost function to allow the Form component to update the post state.

      submitting={submitting}: Passes the submitting state, likely to disable the form or show a loading indicator during submission.

      handleSubmit={createPrompt}: Passes the createPrompt function to be called when the form is submitted.
*/}

export default CreatePrompt;

  {/*
  Exporting the Component
      export default CreatePrompt;
      Purpose: Exports the CreatePrompt component as the default export from this module, 
      allowing it to be imported and used in other parts of the application. 
*/}