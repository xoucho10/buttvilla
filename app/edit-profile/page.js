"use client";
import { useEffect, useState } from "react";

export default function EditProfilePage(){
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser(){
      // MOVE ALL YOUR await CODE INSIDE HERE
      try {
        // example if you use supabase:
        // const { data } = await supabase.auth.getUser();
        // setUser(data.user);
        
        // your logic here...
      } catch (e){
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  if(loading) return <div className="p-10">Loading profile...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-black">Edit Profile</h1>
      {/* rest of your form */}
    </div>
  )
}