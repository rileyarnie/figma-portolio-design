import pic from "../assets/person.jpg"

const ProfilePic = () => {
    return (
        <div className="pt-8 grid place-items-center">
            <img className="h-42 w-42 rounded-full object-cover" src={pic} alt="profile" />
        </div>
    )
}

export default ProfilePic
