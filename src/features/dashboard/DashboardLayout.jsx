import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStay } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const {
    stays,
    isLoading: isLoadingStays,
    confirmedStays,
    numDays,
  } = useRecentStay();
  const { cabins, isLoading: isLoadingCabins } = useCabins();
  if (isLoadingBookings || isLoadingBookings || isLoadingCabins)
    return <Spinner />;

  console.log(bookings);

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>Today's Activities</div>
      <div>Chart stay duration</div>
      <SalesChart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
