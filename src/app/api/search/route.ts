import { NextRequest, NextResponse } from "next/server";
import db from "../../../db";
import { sql } from 'drizzle-orm'
import { advocates } from "../../../db/schema"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const searchQuery = searchParams.get("specialty");

  if (searchQuery) {
    const data = await db.select().from(advocates).where(
      sql`jsonb_to_tsvector('english', ${advocates.specialties}, '["string"]') @@ websearch_to_tsquery('english', ${searchQuery})`
    );
    return Response.json({data});
  }

  return NextResponse.json({
    statusCode: 400,
    message: "Query string was empty"
  })

}