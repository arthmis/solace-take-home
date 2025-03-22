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
  const [isLoadingFilteredAdvocates, setIsLoadingFilteredAdvocates] = useState(false);

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
        const { statusCode, data } = jsonResponse;
        if (statusCode === 400) {
          throw new Error("error with request");
        }

        setFilteredAdvocates(data);
      }).catch(() => {
        // not enough time to think about proper error handling
        console.log("there was an error with the search term");
      })
      .finally(() => {
          setIsLoadingFilteredAdvocates(false);
      });
    });

    setIsLoadingFilteredAdvocates(true);
  }

  let filteredAdvocatesTable = filteredAdvocates.length > 0 && <AdvocatesTable advocates={filteredAdvocates} />;
  let loading = <span className="loading loading-dots loading-xl"></span>;

  return (
    <main style={{ margin: "24px" }}>
      <h1 className="text-3xl font-bold pb-4 text-[#347866]">Welcome to Solace Advocates!</h1>
      <div>
        <form className="flex flex-col gap-4" action={search}>
          <label htmlFor="specialties">Select the type of medical service you need help with (required)</label>
          <select className="select" value={selectedSpecialty} onChange={onChange} required name="specialties" id="specialties">
            {specialties.map((specialty) => {
              return (
                <option key={specialty} value={specialty}>{specialty}</option>
              )
            })}
          </select>
          <button className="btn btn-md bg-[#347866] text-white w-fit" type="submit">Find Care</button>
        </form>
      </div>
      <br />
      <br />
      {isLoadingFilteredAdvocates ? loading  : filteredAdvocatesTable }

    </main>
  );
}
