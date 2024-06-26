
const root = "http://localhost:4000/api/"

export const RegisterUser = async (user) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }

    try {
        const response = await fetch(`${root}auth/register`, options);

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        return error;
    }
}

export const LoginUser = async (accreditation) => {

    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(accreditation),
      };
    
      try {
        const response = await fetch(`${root}auth/login`, options);
    
        const data = await response.json();
        console.log("data de llamda a DB");
        console.log(data)
    
        if (!data.success) {
          throw new Error(data.message);
        }
    
        return data;
      } catch (error) {
        return error;
      }
}

export const GetProfile = async (token) => {

  const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    };
  
    try {
      const response = await fetch(`${root}users/profile`, options);
  
      const data = await response.json();
  
      if (!data.success) {
        throw new Error(data.message);
      }
  
      return data;
    } catch (error) {
      return error;
    }
}

export const UpdateProfile = async (token, data) => {

  const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data)
    };
  
    try {
      const response = await fetch(`${root}users/profile`, options);
  
      const data = await response.json();
      console.log("datos");
      console.log(data)
  
      if (!data.success) {
        throw new Error(data.message);
      }
  
      return data;
    } catch (error) {
      return error;
    }
}

export const GetAppointments = async (token) => {

  const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    };
  
    try {
      const response = await fetch(`${root}appointments`, options);
  
      const data = await response.json();
  
      if (!data.success) {
        throw new Error(data.message);
      }
  
      return data;
    } catch (error) {
      return error;
    }
}

export const GetServices = async (services) => {

  const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      const response = await fetch(`${root}services`, options);
  
      const data = await response.json();
  
      if (!data.success) {
        throw new Error(data.message);
      }
  
      return data;
    } catch (error) {
      return error;
    }
}

export const CreateAppointment = async (token, appointmentsData) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(appointmentsData)
  };

  try {
    const response = await fetch(`${root}appointments`, options);

    const data = await response.json();
    console.log("datos");
    console.log(data)

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
}

export const GetUsers = async (token) => {

  const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    };
  
    try {
      const response = await fetch(`${root}users`, options);
  
      const data = await response.json();
  
      if (!data.success) {
        throw new Error(data.message);
      }
  
      return data;
    } catch (error) {
      return error;
    }
}

export const DeleteUsers = async (userId, token ) => {

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  };

  try {
    const response = await fetch(`${root}users/${userId}`, options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
}

export const DeleteAppointments = async (appointmentId, token ) => {

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  };

  try {
    const response = await fetch(`${root}appointments/${appointmentId}`, options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
}