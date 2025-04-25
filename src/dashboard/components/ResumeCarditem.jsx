// import { Loader2Icon, MoreVertical } from 'lucide-react';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// import GlobalApi from './../../../service/GlobalApi';
// import { toast } from 'sonner';
// // import { error } from 'console';


// function ResumeCarditem({ resume ,refreshData}) {
//   const themeColor = resume?.themeColor || '#EC4899';
//   const navigate = useNavigate();
//   const [openAlert,setOpenAlert]=useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleDownload = () => {
//     // Trigger print for now, or integrate real PDF download logic
//     window.open(`/my-resume/${resume.documentId}/view`, '_blank');
//     setTimeout(() => {
//       window.print();
//     }, 500);
//   };

// const onDelete=()=>{
//   setLoading(true);
//   GlobalApi.DeleteResumeById(resume.documentId).then(resp=>{
//     console.log(resp);
//     toast("Resume Deleted")
//     refreshData()
//     setLoading(false);
//     setOpenAlert(false);
//   },(error)=>{
//     setLoading(false);
//   })
// }

//   return (
//     <div className="rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 h-[280px] overflow-hidden flex flex-col cursor-pointer">

//       {/* Top Section */}
//       <div
//         className="flex-1 flex items-center justify-center"
//         style={{
//           background: `linear-gradient(135deg, #EC4899, #FDBA74)`,
//           borderTop: `4px solid ${themeColor}`,
//         }}
//         onClick={() => navigate(`/dashboard/resume/${resume.documentId}/edit`)}
//       >
//         <img
//           src="/cv.png"
//           width={70}
//           height={70}
//           alt="Resume Icon"
//           className="object-contain"
//         />
//       </div>

//       {/* Bottom Section */}
//       <div
//         className="flex items-center justify-between px-4 text-white font-semibold py-3 text-sm"
//         style={{
//           backgroundColor: themeColor,
//           borderBottomLeftRadius: '0.5rem',
//           borderBottomRightRadius: '0.5rem',
//         }}
//       >
//         <span className="truncate">{resume.title}</span>

//         <DropdownMenu>
//           <DropdownMenuTrigger>
//             <MoreVertical className="h-5 w-5 text-white cursor-pointer hover:opacity-80" />
//           </DropdownMenuTrigger>
//           <DropdownMenuContent>
//             <DropdownMenuItem onClick={() => navigate(`/dashboard/resume/${resume.documentId}/edit`)}>Edit</DropdownMenuItem>
//             <DropdownMenuItem onClick={() => navigate(`/my-resume/${resume.documentId}/view`)}>View</DropdownMenuItem>
//             <DropdownMenuItem onClick={() => navigate(`/my-resume/${resume.documentId}/view`)}>Download</DropdownMenuItem>
//             <DropdownMenuItem onClick={()=>setOpenAlert(true)}>Delete</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>

//         <AlertDialog open ={openAlert}>
 
//   <AlertDialogContent  >
//     <AlertDialogHeader>
//       <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//       <AlertDialogDescription>
//         This action cannot be undone. This will permanently delete your account
//         and remove your data from our servers.
//       </AlertDialogDescription>
//     </AlertDialogHeader>
//     <AlertDialogFooter>
//     <AlertDialogCancel onClick={()=>setOpenAlert(false)}>Cancel</AlertDialogCancel>
//     <AlertDialogAction onClick={onDelete}
//                 disabled={loading}>
//                 {loading ? <Loader2Icon className='animate-spin' /> : 'Delete'}
//               </AlertDialogAction>
//     </AlertDialogFooter>
//   </AlertDialogContent>
// </AlertDialog>

//       </div>
//     </div>
//   );
// }

// export default ResumeCarditem;


import { Loader2Icon, MoreVertical } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import GlobalApi from './../../../service/GlobalApi';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Gradient color palette
const GRADIENT_PALETTES = [
  // ["#FF6F61", "#FDBA74"], // Coral → Peach
  // ["#1E88E5", "#90CAF9"], // Blue → Sky
  // ["#43A047", "#A5D6A7"], // Green → Mint
  // ["#8E24AA", "#D1C4E9"], // Purple → Lavender
  // ["#FB8C00", "#FFD180"], // Orange → Apricot
  // ["#00ACC1", "#80DEEA"], // Teal → Aqua
  // ["#7CB342", "#DCE775"], // Light Green → Lemon
  // ["#C2185B", "#F48FB1"], // Crimson → Pink
  // ["#5E35B1", "#B39DDB"], // Deep Purple → Violet
  // ["#455A64", "#B0BEC5"], // Blue-Grey → Steel
  ["#FB8C00","#FFE0B2","#EF6C00","#FFF8E1","#3E2723"],
  ["#43A047","#A5D6A7","#2E7D32","#F1F8E9","#263238"],
  ["#1E88E5","#90CAF9","#1565C0","#F5F7FA","#212121"],
  ["#8E24AA","#D1C4E9","#6A1B9A","#FAF5FF","#2C2C2C"],
  ["#8E24AA","#1F1F1F","#BB86FC","#03DAC6","#E0E0E0"],
];

const getGradientForResume = (id) => {
  const hash = [...id].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return GRADIENT_PALETTES[hash % GRADIENT_PALETTES.length];
};

function ResumeCarditem({ resume, refreshData }) {
  const navigate = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const [primary, gradientEnd] = getGradientForResume(resume.documentId);

  const handleDownload = () => {
    window.open(`/my-resume/${resume.documentId}/view`, '_blank');
    setTimeout(() => {
      window.print();
    }, 500);
  };

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId)
      .then(() => {
        toast("Resume Deleted");
        refreshData();
        setLoading(false);
        setOpenAlert(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Failed to delete resume", error);
      });
  };

  return (
    <div className="rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 h-[280px] overflow-hidden flex flex-col cursor-pointer">
      {/* Top Section */}
      <div
        className="flex-1 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${primary}, ${gradientEnd})`,
          borderTop: `4px solid ${primary}`,
        }}
        onClick={() => navigate(`/dashboard/resume/${resume.documentId}/edit`)}
      >
        <img
          src="/cv.png"
          width={70}
          height={70}
          alt="Resume Icon"
          className="object-contain"
        />
      </div>

      {/* Bottom Section */}
      <div
        className="flex items-center justify-between px-4 text-white font-semibold py-3 text-sm"
        style={{
          backgroundColor: primary,
          borderBottomLeftRadius: '0.5rem',
          borderBottomRightRadius: '0.5rem',
        }}
      >
        <span className="truncate">{resume.title}</span>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="h-5 w-5 text-white cursor-pointer hover:opacity-80" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => navigate(`/dashboard/resume/${resume.documentId}/edit`)}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate(`/my-resume/${resume.documentId}/view`)}>View</DropdownMenuItem>
            <DropdownMenuItem onClick={handleDownload}>Download</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenAlert(true)}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={openAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your resume.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenAlert(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete} disabled={loading}>
                {loading ? <Loader2Icon className="animate-spin" /> : 'Delete'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default ResumeCarditem;
