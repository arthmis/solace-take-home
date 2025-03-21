"use client";

import { useState } from "react";
import AdvocatesTable from "@/components/advocates_table";

const specialties = [
  "Bipolar",
  "LGBTQ",
  "Medication/Prescribing",
  "Suicide History/Attempts",
  "General Mental Health (anxiety, depression, stress, grief, life transitions)",
  "Men's issues",
  "Relationship Issues (family, friends, couple, etc)",
  "Trauma & PTSD",
  "Personality disorders",
  "Personal growth",
  "Substance use/abuse",
  "Pediatrics",
  "Women's issues (post-partum, infertility, family planning)",
  "Chronic pain",
  "Weight loss & nutrition",
  "Eating disorders",
  "Diabetic Diet and nutrition",
  "Coaching (leadership, career, academic and wellness)",
  "Life coaching",
  "Obsessive-compulsive disorders",
  "Neuropsychological evaluations & testing (ADHD testing)",
  "Attention and Hyperactivity (ADHD)",
  "Sleep issues",
  "Schizophrenia and psychotic disorders",
  "Learning disorders",
  "Domestic abuse",
];

export default function Home() {
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialties[0]);

  const onChange = (e) => {
    const searchTerm = e.target.value;
    setSelectedSpecialty(searchTerm);
  };

  const search  = () => {
    const searchParams = new URLSearchParams("");
    searchParams.append("specialty", selectedSpecialty);

    const searchUrl = new URL(`/api/search?${searchParams.toString()}`, "http://localhost:3000");

    fetch(searchUrl).then((response) => {
      response.json().then((jsonResponse) => {
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <form action={search}>
          <label htmlFor="specialties">Select the type of medical service you need help with (required)</label>
          <select value={selectedSpecialty} onChange={onChange} required name="specialties" id="specialties">
            {specialties.map((specialty) => {
              return (
                <option key={specialty} value={specialty}>{specialty}</option>
              )
            })}
          </select>
          <button type="submit">Find Care</button>
        </form>
      </div>
      <br />
      <br />
      {filteredAdvocates.length > 0 && <AdvocatesTable advocates={filteredAdvocates}/>}

    </main>
  );
}
