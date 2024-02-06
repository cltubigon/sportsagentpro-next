import {
  FaRunning,
  FaUsers,
  FaCommentDollar,
  FaRegGrinHearts,
  FaUserTie,
} from "react-icons/fa"

export const accountTypes = [
  {
    icon: FaRunning,
    type: "Athlete",
    value: "athlete",
    desc: "Build and monetize your brand.",
    id: 1,
  },
  {
    icon: FaUsers,
    type: "Athlete representative",
    value: "athlete_representative",
    desc: "Support and manage your athletes.",
    id: 2,
  },
  {
    icon: FaCommentDollar,
    type: "Brand",
    value: "brand",
    desc: "Browse and book athletes to promote your business.",
    id: 3,
  },
  {
    icon: FaRegGrinHearts,
    type: "Fan",
    value: "fan",
    desc: "Request shoutouts and more from your favorite athletes.",
    id: 4,
  },
  {
    icon: FaUserTie,
    type: "Coach/staff",
    value: "coach_staff",
    desc: "Share and receive content to engage your audience.",
    id: 5,
  },
]
