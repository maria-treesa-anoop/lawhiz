
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, firestore } from './firebase'; // Import your initialized Firebase app and Firestore

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Create user with email and password
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);

      // Add additional user details to Firestore
      await firestore.collection('users').doc(userCredential.user.uid).set({
        username: username,
        email: email
      });

      // Redirect to login page after successful signup
      window.location.href = '/login'; // You can also use history.push('/login')
    } catch (error) {
      console.error('Signup Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 py-8 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-semibold mb-8 text-center">Sign Up</h1>
      <div className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div className="text-center mt-8">
        <button className="bg-teal-500 text-white px-4 py-2 rounded-md" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
      <p className="mt-4 text-gray-600 text-center">Already have an account? <Link to="/login" className="text-blue-500">Login here</Link></p>
    </div>
  );
}

export default SignupPage;