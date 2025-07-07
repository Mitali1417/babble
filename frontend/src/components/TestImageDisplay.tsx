// import React from 'react';
// import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

// interface TestImageDisplayProps {
//   user: {
//     _id: string;
//     name: string;
//     email: string;
//     pic?: string;
//   };
// }

// const TestImageDisplay: React.FC<TestImageDisplayProps> = ({ user }) => {
//   return (
//     <div className="p-4 border rounded-lg space-y-4">
//       <h3 className="font-bold">User Image Display Test</h3>
      
//       <div className="space-y-2">
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Image URL:</strong> {user.pic || 'No image'}</p>
//       </div>

//       <div className="flex items-center space-x-4">
//         <div>
//           <p className="text-sm font-medium mb-2">Small Avatar (32x32):</p>
//           <Avatar className="w-8 h-8">
//             <AvatarImage src={user.pic || "/placeholder.svg"} alt={user.name} />
//             <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
//               {user.name[0]?.toUpperCase()}
//             </AvatarFallback>
//           </Avatar>
//         </div>

//         <div>
//           <p className="text-sm font-medium mb-2">Medium Avatar (40x40):</p>
//           <Avatar className="w-10 h-10">
//             <AvatarImage src={user.pic || "/placeholder.svg"} alt={user.name} />
//             <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
//               {user.name[0]?.toUpperCase()}
//             </AvatarFallback>
//           </Avatar>
//         </div>

//         <div>
//           <p className="text-sm font-medium mb-2">Large Avatar (128x128):</p>
//           <Avatar className="w-32 h-32">
//             <AvatarImage src={user.pic || "/placeholder.svg"} alt={user.name} />
//             <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-3xl">
//               {user.name[0]?.toUpperCase()}
//             </AvatarFallback>
//           </Avatar>
//         </div>
//       </div>

//       <div className="mt-4 p-2 bg-gray-100 rounded">
//         <p className="text-xs text-gray-600">
//           <strong>Debug Info:</strong> If you see the fallback (letter avatar) instead of the image, 
//           it means the image URL is not loading properly. Check the browser's network tab to see 
//           if the image request is successful.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TestImageDisplay; 