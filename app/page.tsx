import getCurrentUser from "./actions/getCurrentUser";
import Navbar from "./components/navbar/Navbar";

export default async function Home() {
    const currentUser = await getCurrentUser();
    return (
        <main>
            <Navbar currentUser={currentUser} />
            <h1>Hello from Stay-hub</h1>
        </main>
    );
}
