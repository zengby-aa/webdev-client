import ContextProfileForm from "../context/ContextProfileForm";
import ProfileForm from "../profile/ProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";

export default function ProfileFormComparisonPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <section className="min-w-0 rounded border p-4">
        <p className="mb-2 font-semibold">useState</p>
        <ProfileForm />
      </section>
      <section className="min-w-0 rounded border p-4">
        <ContextProfileForm />
      </section>
      <section className="min-w-0 rounded border p-4">
        <ZustandProfileForm />
      </section>
    </div>
  );
}
